import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NovaTransacaoComponent } from './nova-transacao.component';
import { PostSaldoService } from '../../services/post-saldo-conta.service';

@NgModule({
  declarations: [NovaTransacaoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [NovaTransacaoComponent],
  providers: [PostSaldoService],
})
export class NovaTransacaoModule { }
