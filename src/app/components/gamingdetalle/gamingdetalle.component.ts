import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-gamingdetalle',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './gamingdetalle.component.html',
  styleUrl: './gamingdetalle.component.css'
})
export class GamingdetalleComponent {
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








  ruta = inject(ActivatedRoute)

  juegos:any
  id:any
  nombre:any 
  año:any
  clasificacion: any; 

  ngOnInit(): void {
    this.ruta.params.subscribe(p =>{
      console.log(p['idGaming']);
      this.id=p['idGaming']
     

      this.juego.forEach(element => 
        {
          if(element.id == this.id){
            this.juegos= element
            this.nombre = element.nombre;
            this.año = element.precio;
        
            console.log(this.juegos);
          }
        }
      )
    })
  
    
  }

}
