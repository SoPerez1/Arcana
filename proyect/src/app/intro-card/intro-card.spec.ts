import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-card',
  templateUrl: './intro-card.html',
  styleUrls: ['./intro-card.css']
})
export class IntroCardComponent implements OnInit {
  isFlipped: boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

  flipCard(): void {
    this.isFlipped = !this.isFlipped; 
  }
}