import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html'

})
export class CaixaDeEntradaComponent {

  private _isNewEmailFormOpen = false;

  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  get isNewEmailFormOpen() {

    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen
  }

  handleNewEmail(formEmail: NgForm) {
    if (formEmail.invalid) return;
    this.emailList.push(this.email)
    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }
    
    formEmail.reset();
  }
}

