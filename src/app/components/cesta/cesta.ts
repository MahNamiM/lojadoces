import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cesta as CestaModel } from '../../models/cesta';
import { ItemCesta } from '../../models/item-cesta';
import itensJson from '../../data/itens-cesta.json';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta implements OnInit {
cesta: CestaModel = new CestaModel();

  ngOnInit(): void {
    // Carrega a lista de itens do JSON e transforma em objetos ItemCesta
    const itens: ItemCesta[] = (itensJson as any[]).map(
      i => new ItemCesta(i.idProduto, i.nome, i.preco, i.quantidade, i.imagem)
    );

    itens.forEach(item => this.cesta.adicionarItem(item));
  }

  aumentar(item: ItemCesta): void {
    this.cesta.atualizarQuantidade(item.idProduto, item.quantidade + 1);
  }

  diminuir(item: ItemCesta): void {
    if (item.quantidade > 1) {
      this.cesta.atualizarQuantidade(item.idProduto, item.quantidade - 1);
    }
  }

  remover(item: ItemCesta): void {
    this.cesta.removerItem(item.idProduto);
  }
}





