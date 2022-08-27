import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'Valdir',
      cpf: '12345678910',
      email: 'valdir@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    },
    {
      id: 2,
      nome: 'Ana',
      cpf: '12345678910',
      email: 'ana@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    },
    {
      id: 3,
      nome: 'Paula',
      cpf: '12345678910',
      email: 'paula@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    },
    {
      id: 4,
      nome: 'Rafael',
      cpf: '12345678910',
      email: 'rafael@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    },
    {
      id: 5,
      nome: 'Carina',
      cpf: '12345678910',
      email: 'carina@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    },
    {
      id: 6,
      nome: 'William',
      cpf: '12345678910',
      email: 'william@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    },
    {
      id: 7,
      nome: 'Vinicius',
      cpf: '12345678910',
      email: 'vini@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    },
    {
      id: 8,
      nome: 'Barbara',
      cpf: '12345678910',
      email: 'barbara@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    },
    {
      id: 9,
      nome: 'Beatriz',
      cpf: '12345678910',
      email: 'bia@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    },
    {
      id: 10,
      nome: 'Paulo',
      cpf: '12345678910',
      email: 'paulo@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    },
    {
      id: 11,
      nome: 'Sergio',
      cpf: '12345678910',
      email: 'sergio@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    },
    {
      id: 12,
      nome: 'Gamão',
      cpf: '12345678910',
      email: 'gamao@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    },
    {
      id: 13,
      nome: 'Fernando',
      cpf: '12345678910',
      email: 'fe@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    },
    {
      id: 14,
      nome: 'Lourdes',
      cpf: '12345678910',
      email: 'lourdes@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    },
    {
      id: 15,
      nome: 'Diego',
      cpf: '12345678910',
      email: 'diego@mail.com',
      senha: '123',
      perfis: ['0'],
      dataCriacao: '12/08/2022'
    }
  ]
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);
  
  constructor() { }

  ngOnInit(): void {
  }
  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}