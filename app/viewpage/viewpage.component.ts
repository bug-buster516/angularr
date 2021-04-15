import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component'
import {viewData} from '../shared/services/viewdata.service'
import {Response} from '../shared/interface'
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {
	dataSymblos: any
	tk: Response
	
  constructor(private vie: viewData, private router: Router, private route: ActivatedRoute, private comp: AppComponent) { 
  
  }

  ngOnInit(): void {
	  
	 if (this.comp.tok===undefined){
		   console.log("Wrong login/password!"),
		  this.router.navigate(['/login'])
		}
	console.log(this.comp.tok)
	this.tk={
		  token:this.comp.tok
	  }
	 console.log(this.comp)
	  console.log(this.tk)
	 this.vie.getD(this.tk).subscribe(
	  (data:Response) =>{ console.log(data)
	  }	,
	  error=>{
		  console.warn(error)
	  }
	  )
	  
  }

}
