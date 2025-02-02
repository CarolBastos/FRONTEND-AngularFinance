import { NgModule } from '@angular/core';
import { CommonModule, DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CardSaldoComponent } from './card-saldo.component';
import { GetSaldoService } from '../../services/get-saldo-conta.service';

@NgModule({
  declarations: [CardSaldoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule
  ],
  exports: [CardSaldoComponent],
  providers: [GetSaldoService,     {
    provide: DATE_PIPE_DEFAULT_OPTIONS,
    useValue: { dateFormat: "longDate" }
  }]
})
export class CardSaldoModule { }
