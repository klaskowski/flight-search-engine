import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.scss']
})
export class LocationInputComponent implements OnInit {
 origin: string = ''
  constructor() { }

  ngOnInit() {
  }

}