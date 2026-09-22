import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ItemCesta } from '../../models/item-cesta';
import { Cesta } from '../../models/cesta';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  selector: 'app-produto-detalhe',
  styleUrl: './produto-detalhe.css',
  templateUrl: './produto-detalhe.html',
})
export class ProdutoDetalhe implements OnInit{
produto = {
    idProduto: 1,
    nome: 'Brigadeiro Gourmet',
    preco: 3.5,
    imagem: 'https://placehold.co/400x300?text=Brigadeiro',
    descricao: 'Brigadeiro artesanal feito com chocolate belga e cobertura de granulado nobre.'
  };

  quantidade = 1;

  constructor(private route: ActivatedRoute) {}
  private cesta: Cesta = new Cesta();

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // Aqui entraria a busca do produto real por id (ex: via service/HTTP)
    console.log('Produto id:', id);
  }

  adicionarNaCesta(): void {
    const item = new ItemCesta(
      this.produto.idProduto,
      this.produto.nome,
      this.produto.preco,
      this.quantidade,
      this.produto.imagem
    );
    this.cesta.adicionarItem(item);
  }
}
