import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

interface Pedido {
  id: number;
  data: string;
  status: string;
  total: number;
}

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  selector: 'app-lista-pedidos',
  styleUrl: './lista-pedidos.css',
  templateUrl: './lista-pedidos.html',
})
export class ListaPedidos {
  pedidos: Pedido[] = [
    { id: 1001, data: '15/09/2026', status: 'Entregue', total: 32.50 },
    { id: 1002, data: '17/09/2026', status: 'Em preparo', total: 18.00 },
    { id: 1003, data: '19/09/2026', status: 'Enviado', total: 45.90 }
  ];
}


