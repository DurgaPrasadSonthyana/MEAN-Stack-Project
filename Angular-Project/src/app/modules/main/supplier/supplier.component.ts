import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  constructor() { }
  firstname: any="Durga";
  lastname: any="Prasad"

menuList:any =[
  {
    id:1,  image:"./assets/mehfil.jpg",    itemName:'Chicken Biryani',    price:250,    hotel:'Mehfil', rating:4.1,    
    itemsList:'Biryani • Noodles • Cakes',
    duration:20 ,    km:2,    discount:10 , cashback:25
  },

  {
    id:2,  image:'/assets/shadab.jpg',    itemName:'Mutton Maragh',    price:450,    hotel:'Kritunga',    rating:3.8,
    itemsList:'Biryani • Veg items',
    duration: 30,    km:5,    discount:20, cashback:25
  },
  {
    id:3,    image:'/assets/sahara.jpg',    itemName:'Chicken 65',    price:498,    hotel:'Sahara',    rating:4.3,
    itemsList:'Biryani • Kababs',
    duration:15,    km:3,    discount:20, cashback:25
  },
  {
    id:4,    image:'/assets/shah ghouse.jpg',    itemName:'Tangdi Kababs',    price:299,    hotel:'Shadab',    rating:3.5,
    itemsList:'Chinese • Fast food',
    duration:30,    km:5,    discount:20, cashback:25
  },
  {
    id:5,    image:'/assets/joint al.jpg',    itemName:'Mutton Mandi',    price:370,    hotel:'Shah Ghouse',    rating:3.8,
    itemsList:'Biryani • Veg items',
    duration:30,    km:5,    discount:20, cashback:25
  },
  {
    id:6,    image:'/assets/shadab.jpg',    itemName:'Butter Chicken',    price:350,    hotel:'Pista House',    rating:4.9,
    itemsList:'Sea Food •  Starters',
    duration:30,    km:5,    discount:15, cashback:150
  },
  {
    id:3,    image:'/assets/sahara.jpg',    itemName:'Chicken 65',    price:498,    hotel:'Sahara',    rating:4.3,
    itemsList:'Biryani • Kababs',
    duration:15,    km:3,    discount:20, cashback:25
  },
  {
    id:2,  image:'/assets/shadab.jpg',    itemName:'Mutton Maragh',    price:450,    hotel:'Kritunga',    rating:3.8,
    itemsList:'Biryani • Veg items',
    duration: 30,    km:5,    discount:20, cashback:25
  },
  {
    id:1,  image:"./assets/mehfil.jpg",    itemName:'Chicken Biryani',    price:250,    hotel:'Mehfil', rating:4.1,    
    itemsList:'Biryani • Noodles • Cakes',
    duration:20 ,    km:2,    discount:10 , cashback:25
  }
] 


  ngOnInit(): void {
  }

}
