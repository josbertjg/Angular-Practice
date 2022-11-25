import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cards=[
    {
      id:1,
      nombre:"Postre Savoy",
      precio:"5$",
      imagenUrl:"https://http2.mlstatic.com/D_Q_NP_923653-MLV46221968677_052021-AC.webp",
      tipoEnvio:true
    },
    {
      id:2,
      nombre:"Pepsi x4",
      precio:"10$",
      imagenUrl:"https://http2.mlstatic.com/D_Q_NP_624959-MLV46347216906_062021-AC.webp",
      tipoEnvio:false
    },
    {
      id:3,
      nombre:"Minalba x12",
      precio:"20$",
      imagenUrl:"https://http2.mlstatic.com/D_Q_NP_725425-MLV51014058727_082022-AC.webp",
      tipoEnvio:true
    },
    {
      id:4,
      nombre:"Coca Cola x12",
      precio:"22$",
      imagenUrl:"https://http2.mlstatic.com/D_Q_NP_831772-MLV49336672470_032022-AC.webp",
      tipoEnvio:true
    },
    {
      id:5,
      nombre:"Pepsi x7",
      precio:"8$",
      imagenUrl:"https://http2.mlstatic.com/D_Q_NP_686445-MLV46317643298_062021-AC.webp",
      tipoEnvio:false
    }
  ];

  busqueda:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
