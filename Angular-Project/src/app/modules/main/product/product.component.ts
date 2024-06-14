import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

title:boolean=true;

  constructor() { }

  menuList: any = [
    { id: 1, image: "assets/article.jpg", likes: 40.7, movieName: 'Article 370' },
    { id: 2, image: "assets/crakk.png", likes: 403.7, movieName: 'Crakk - Jeetega Toh Jiyegaa' },
    { id: 3, image: "assets/roy.jpg", likes: 8.7, movieName: 'Siddharth Roy' },
    { id: 8, image: "assets/sankeerth.jpeg", likes: 50.4, movieName: 'Sankeerth Roy' },
    { id: 4, image: "assets/aquaman.jpg", likes: 14.2, movieName: 'Aquaman and the Lost Kingdom' },
    { id: 5, image: "assets/brama.png", likes: 4.4, movieName: 'Bramayugam' },
    { id: 6, image: "assets/ds.jpg", likes: 5.3, movieName: 'Demon Slayer: Kimetsu No Yaiba' },
    { id: 7, image: "assets/hanuman1.jpg", likes: 438, movieName: 'Hanu-Man' },
    { id: 9, image: "assets/article.jpg", likes: 40.7, movieName: 'Article 370' },
    { id: 10, image: "assets/dune.png", likes: 50.4, movieName: 'Dune: Part Two' },
    // {id: 11, image:"assets/amarudu.jpeg", likes:50.4, movieName:'Nenu Amaruduni Raa' },

  ]


  ngOnInit(): void {
  }



}
