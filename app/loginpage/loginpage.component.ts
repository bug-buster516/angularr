import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {AuthService} from '../shared/services/auth.service'
import {ActivatedRoute,Router} from '@angular/router'
import {Response} from '../shared/interface'
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  form: FormGroup
  token: Response
  constructor(private auth:AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
	  this.form= new FormGroup({
		  login: new FormControl(null, [Validators.required]),
		  password: new FormControl(null, [Validators.required])
	  })
  }
  
  onSubmit() {
	 
	  this.auth.login(this.form.value).subscribe(
	  (data:Response) =>{ this.token=data,
	  console.log(this.token)
	  }	,
	  error=>{
		  console.warn(error)
	  }
	  )
  }

}
