import { Component, Input, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{
  
  @Input() visible:boolean = false;
  @Input() NotFoundMessage: string = "Nothing found!";
  @Input() resetLinkText:string = "Reset";
  @Input() resetLinkRoute:string = "/";

  constructor(){ }
  ngOnInit(): void {
      
  }
}
