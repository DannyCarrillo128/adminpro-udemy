import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  
  @ViewChild('txtProgress', null) txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    //console.log('Leyenda', this.leyenda);
    //console.log('Porcentaje', this.porcentaje)
  }

  ngOnInit() {
    //console.log('Leyenda', this.leyenda);
    //console.log('Porcentaje', this.porcentaje)
  }

  onChanges( newValue: number ) {
    // let elementHTML:any = document.getElementsByName('porcentaje')[0];
    // console.log( elementHTML.value );

    if( newValue >= 100 ) {
      this.porcentaje = 100;
    } else if( newValue <= 0 ) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    //elementHTML.value = this.porcentaje;
    this.txtProgress.nativeElement.value = this.porcentaje;

    this.cambioValor.emit( this.porcentaje );
    this.txtProgress.nativeElement.focus();
  }

  cambiarValor( valor: number ) {
    if(this.porcentaje > 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if(this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit( this.porcentaje );
  }

}
