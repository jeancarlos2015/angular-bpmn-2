import resizeAllModule from 'bpmn-js-nyan/lib/resize-all-rules';
import colorPickerModule from 'bpmn-js-nyan/lib/color-picker';
import nyanDrawModule from 'bpmn-js-nyan/lib/nyan/draw';
import nyanPaletteModule from 'bpmn-js-nyan/lib/nyan/palette';

import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import * as BpmnJS from 'bpmn-js/dist/bpmn-modeler.production.min.js';
import { from, Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { map, switchMap } from 'rxjs/operators';
import BpmnModeler from 'bpmn-js/lib/Modeler';

@Component({
  selector: 'app-app-bpmn-modeler',
  templateUrl: './app-bpmn-modeler.component.html',
  styleUrls: ['./app-bpmn-modeler.component.scss']
})
export class AppBpmnModelerComponent implements OnInit {

  diagramUrl = 'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';
  importError?: Error;

  private bpmnJS: BpmnJS;

  @ViewChild('ref', { static: true }) private el: ElementRef;
  @Output() private importDone: EventEmitter<any> = new EventEmitter();

  constructor(
    private http: HttpClient
  ) {
    this.bpmnJS = new BpmnModeler({
      additionalModules: [
        resizeAllModule,
        colorPickerModule,
        nyanDrawModule,
        nyanPaletteModule
      ]
    });

    this.bpmnJS.on('import.done', ({ error }) => {
      if (!error) {
        this.bpmnJS.get('canvas').zoom('fit-viewport');
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.url) {
      this.loadUrl(changes.url.currentValue);
    }
  }
  ngOnDestroy(): void {
    this.bpmnJS.destroy();
  }
  ngAfterContentInit(): void {
    this.bpmnJS.attachTo(this.el.nativeElement);
  }

  ngOnInit(): void {
    this.loadUrl(this.diagramUrl);
  }
  loadUrl(url: string): Subscription {

    return (
      this.http.get(url, { responseType: 'text' }).pipe(
        switchMap((xml: string) => this.importDiagram(xml)),
        map(result => result.warnings),
      ).subscribe(
        (warnings) => {
          this.importDone.emit({
            type: 'success',
            warnings
          });
        },
        (err) => {
          this.importDone.emit({
            type: 'error',
            error: err
          });
        }
      )
    );
  }

  private importDiagram(xml: string): Observable<{warnings: Array<any>}> {
    return from(this.bpmnJS.importXML(xml) as Promise<{warnings: Array<any>}>);
  }

}
