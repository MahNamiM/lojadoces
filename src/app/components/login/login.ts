import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  email = '';
  senha = '';
  erro = '';

  constructor(private router: Router) {}

  entrar(): void {
    if (!this.email || !this.senha) {
      this.erro = 'Preencha e-mail e senha.';
      return;
    }
    // Aqui entraria a chamada real de autenticação (service/HTTP)
    this.erro = '';
    this.router.navigate(['/']);
  }
}


