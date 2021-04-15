import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'
import {AuthService} from '../shared/services/auth.service'
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {
	dataSymblos: any
  constructor(private comp: AppComponent) { 
  
  }

  ngOnInit(): void {
	  console.log(this.comp.tok)
  }

}
