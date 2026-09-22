import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule} from '@angular/router';

interface Produto {
  idProduto: number;
  nome: string;
  preco: number;
  imagem: string;
}

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  selector: 'app-resultado-busca',
  styleUrl: './resultado-busca.css',
  templateUrl: './resultado-busca.html',
})
export class ResultadoBusca implements OnInit{
termo = '';

  produtos: Produto[] = [
    { idProduto: 1, nome: 'Brigadeiro Gourmet', preco: 3.5, imagem: 'https://placehold.co/200x150?text=Brigadeiro' },
    { idProduto: 2, nome: 'Brownie de Chocolate', preco: 6.0, imagem: 'https://placehold.co/200x150?text=Brownie' },
    { idProduto: 3, nome: 'Cupcake Recheado', preco: 7.5, imagem: 'https://placehold.co/200x150?text=Cupcake' },
    { idProduto: 3, nome: 'Pavê', preco: 7.0, imagem: 'https://placehold.co/200x150?text=Pavê' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.termo = params.get('q') || '';
      // Aqui entraria o filtro real via service/HTTP com base no termo
    });
  }
}
