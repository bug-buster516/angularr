import {Injectable} from '@angular/core'
import {Response} from '../interface'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { map, retry, catchError } from 'rxjs/operators';
@Injectable({
	providedIn: 'root'
})
export class viewData {
	
	constructor(private http: HttpClient){
		
	}
	
	getD (user: Response): Observable<any> {
	
	return this.http.post('http://bmhmh.ho.ua/index.php/api/getRecords', user)
	}
}