import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'
@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {

  constructor(private comp: AppComponent) { }

  ngOnInit(): void {
	  console.log(this.comp.tok)
  }

}
