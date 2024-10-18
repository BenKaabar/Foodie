import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!:Food;
  constructor(private ActivatedRoute:ActivatedRoute, private FoodService:FoodService,
    private CartService:CartService,
    private router:Router){
    ActivatedRoute.params.subscribe((params) => {
      if (params["id"])
      this.food = FoodService.getFoodById(params["id"]);
    })
  }
  ngOnInit(): void {
      
  }
  addToCart(){
    this.CartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
