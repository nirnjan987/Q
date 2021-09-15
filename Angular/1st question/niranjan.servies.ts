import {Injectable} from '@angular/core'; 
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import{Users} from './niranjan';

@Injectable({
providedIn: 'root'
})
export class UsersService {
constructor(private http: HttpClient) { }
url:string="https://jsonplaceholder.typicode.com/posts"
getUsers()
{
return this.http.get<Users[]>(this.url)
}
}