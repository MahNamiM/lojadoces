import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-detalhe-pedido',
  styleUrl: './detalhe-pedido.css',
  templateUrl: './detalhe-pedido.html',
})
export class DetalhePedido {
  idPedido: string | null = null;

  itens = [
    { nome: 'Brigadeiro Gourmet', quantidade: 4, preco: 3.5 },
    { nome: 'Brownie de Chocolate', quantidade: 2, preco: 6.0 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idPedido = this.route.snapshot.paramMap.get('id');
    // Aqui entraria a busca real do pedido pelo id (service/HTTP)
  }

  get total(): number {
    return this.itens.reduce((soma, i) => soma + i.quantidade * i.preco, 0);
  }
}
