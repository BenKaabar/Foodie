import { Component, Input, OnInit } from '@angular/core';
import { tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{

  @Input()
  foodPageTags?:string[] ;
  tags?:tag[];

  constructor(private foodService:FoodService){}
    ngOnInit(): void {
      if (!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
    }
}
