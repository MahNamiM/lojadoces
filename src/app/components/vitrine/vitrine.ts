import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ProdutoVitrine {
  idProduto: number;
  nome: string;
  preco: number;
  imagem: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {
  produtos: ProdutoVitrine[] = [
    { idProduto: 1, nome: 'Brigadeiro Gourmet', preco: 3.5, imagem: 'https://placehold.co/300x220?text=Brigadeiro' },
    { idProduto: 2, nome: 'Brownie de Chocolate', preco: 6.0, imagem: 'https://placehold.co/300x220?text=Brownie' },
    { idProduto: 3, nome: 'Cupcake Recheado', preco: 7.5, imagem: 'https://placehold.co/300x220?text=Cupcake' },
    { idProduto: 4, nome: 'Pavê de Morango', preco: 12.0, imagem: 'https://placehold.co/300x220?text=Pavê' },
  ];
}
