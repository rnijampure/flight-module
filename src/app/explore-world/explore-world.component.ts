import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-world',
  templateUrl: './explore-world.component.html',
  styleUrls: ['./explore-world.component.css']
})
export class ExploreWorldComponent implements OnInit {

  public explorerList = [{
    image: '../../assets/images/switzerland-3.jpg',
    text: 'İstanbul - İzmir',
    rates: '98,52 TL'
  }]
  constructor() { }

  ngOnInit() {
  }

}
