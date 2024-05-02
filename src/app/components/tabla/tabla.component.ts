import { CommonModule } from '@angular/common';
import { ApplicationModule, Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule,RouterLink,ApplicationModule,FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  juego = [
    {
      id: "1",
      nombre: "Mario 2 ",
      precio: 20,
    
      url: "https://www.nintendo.com/eu/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1600w.jpg"
    },
    {
      id: "2",
      nombre: "titanic",
      precio: 10,
     
      url: "https://www.tonica.la/__export/1595178877705/sites/debate/img/2020/07/19/titanic-tendrx-su-propio-juego-de-mesa_1.jpg_1758632412.jpg"

    },
    {
      id: "3",
      nombre: "trasformes",
      precio: 10,
      
      url: "https://media.vandal.net/t200/6543/2009512131617_1.jpg"

    },
    {
      id: "4",
      nombre: "lol",
      precio: 10,
     
      url: "https://www.mundodeportivo.com/alfabeta/hero/2020/11/Guia-completa-de-League-of-Legends-trucos-y-secretos.jpg?width=768&aspect_ratio=16:9"

    },
    {
      id: "5",
      nombre: "valorant",
      precio: 11,
     
      url: "https://i.blogs.es/e7dabb/84402-tier-article_image_d-2/650_1200.jpg"

    }
  ]


 
  imagenVisible: boolean = false;
  imagenUrl: string = '';
  juegoSeleccionado: any;
  idBuscado: string = ''; 

  mostrarImagen(url: string): void {
    this.imagenVisible = !this.imagenVisible;
    this.imagenUrl = url;
  }




  juegos: any[] = []; 

 
  idBusqueda: string = ''; 

  constructor() { this.juegos = this.juego; }

  
  buscarJuegoPorId() {
    if (this.idBusqueda) {
      const juegoEncontrado = this.juegos.find(juego => juego.id === this.idBusqueda);
      if (juegoEncontrado) {
        this.juegoSeleccionado = juegoEncontrado;
      } else {
        this.juegoSeleccionado = null;
        alert('No se encontró ningún juego con el ID especificado.');
      }
    } else {
      this.juegoSeleccionado = null;
    }
  }

  
  }



  
  

