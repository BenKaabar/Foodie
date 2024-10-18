import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input()
  stars!:number;

  @Input()
  size:number=1;
  get styles() {
    return{
      'width.rem' : this.size,
      'height.rem' : this.size,
      'marginRight.rem' : this.size / 6,
    }
  }
  getStarImage(current:number):string{
    const previousHalf = current -0.5;
    const imageName = this.stars >= current? 'star-Full'
                      :this.stars >= previousHalf? 'star-Half'
                      :'star-Empty';
                      return `/assets/images/${imageName}.png`;
  }
}
