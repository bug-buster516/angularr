import {Injectable} from '@angular/core'
import {User} from '../interface'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { map, retry, catchError } from 'rxjs/operators';
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient){
		
	}
	
	login (user: User): Observable<any> {
	return this.http.post('http://bmhmh.ho.ua/index.php/api/login', user)
	}
}