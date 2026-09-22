import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-cadastro-cliente',
  styleUrl: './cadastro-cliente.css',
  templateUrl: './cadastro-cliente.html',
})
export class CadastroCliente {nomeCompleto = '';
  email = '';
  telefone = '';
  senha = '';
  confirmarSenha = '';
  erro = '';

  constructor(private router: Router) {}

  cadastrar(): void {
    if (!this.nomeCompleto || !this.email || !this.senha) {
      this.erro = 'Preencha todos os campos obrigatórios.';
      return;
    }
    if (this.senha !== this.confirmarSenha) {
      this.erro = 'As senhas não coincidem.';
      return;
    }
    // Aqui entraria a chamada real de cadastro (service/HTTP)
    this.erro = '';
    this.router.navigate(['/login']);
  }}




