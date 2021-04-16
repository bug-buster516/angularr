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
	dataSymbols: any
	tk: Response
	headers=["Date", "Time","Phone","User","Event"]
	headers2=["Date", "Time","Phone","Name","Event"]
  constructor(private vie: viewData, private router: Router, private route: ActivatedRoute, private comp: AppComponent) { 
  
  }

  ngOnInit(): void {
	  
	 if (this.comp.tok===undefined){
		   console.log("Wrong login/password!"),
		  this.router.navigate(['/login'])
		}
	this.tk={
		  token:this.comp.tok
	  }
	 this.vie.getD(this.tk).subscribe(
	  (data:Response) =>{ this.dataSymbols=data
	  console.log(this.dataSymbols)
	  }	,
	  error=>{
		  console.warn(error)
	  }
	  )
	  
  }

}
