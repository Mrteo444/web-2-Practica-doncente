import { CommonModule } from '@angular/common';
import { ApplicationModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gamin-maxi-yminimo',
  standalone: true,
  imports: [CommonModule,RouterLink,ApplicationModule,FormsModule],
  templateUrl: './gamin-maxi-yminimo.component.html',
  styleUrl: './gamin-maxi-yminimo.component.css'
})
export class GaminMaxiYminimoComponent {
  juego = [
    {
      id: "1",
      nombre: "Mario 2",
      precio: 20,
      url: "https://www.nintendo.com/eu/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1600w.jpg"
    },
    {
      id: "2",
      nombre: "Titanic",
      precio: 10,
      url: "https://www.tonica.la/__export/1595178877705/sites/debate/img/2020/07/19/titanic-tendrx-su-propio-juego-de-mesa_1.jpg_1758632412.jpg"
    },
    {
      id: "3",
      nombre: "Transformers",
      precio: 10,
      url: "https://media.vandal.net/t200/6543/2009512131617_1.jpg"
    },
    {
      id: "4",
      nombre: "League of Legends",
      precio: 10,
      url: "https://www.mundodeportivo.com/alfabeta/hero/2020/11/Guia-completa-de-League-of-Legends-trucos-y-secretos.jpg?width=768&aspect_ratio=16:9"
    },
    {
      id: "5",
      nombre: "Valorant",
      precio: 11,
      url: "https://i.blogs.es/e7dabb/84402-tier-article_image_d-2/650_1200.jpg"
    }
  ];

  juegosFiltrados: any[] = [];
  precioMinimo: number = 0;
  precioMaximo: number = Number.MAX_SAFE_INTEGER;

  imagenVisible: boolean = false;
  imagenUrl: string = '';
  juegoSeleccionado: any;
  idBuscado: string = '';

  constructor() {}

  ngOnInit(): void {
    this.juegosFiltrados = this.juego;
  }

  mostrarImagen(url: string): void {
    this.imagenVisible = !this.imagenVisible;
    this.imagenUrl = url;
  }

  buscarJuegoPorId() {
    if (this.idBuscado) {
      const juegoEncontrado = this.juego.find(juego => juego.id === this.idBuscado);
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

  aplicarFiltro(): void {
    this.juegosFiltrados = this.juego.filter(juego => juego.precio >= this.precioMinimo && juego.precio <= this.precioMaximo);
  }

}
