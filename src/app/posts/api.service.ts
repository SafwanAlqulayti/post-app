import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class ApiService {
    api: string = `https://jsonplaceholder.typicode.com/posts`

    constructor(private http:HttpClient) {}
 
     getPosts() {
        return this.http.get(this.api);
    }

    getOnePost(id){
  return this.http.get(`${this.api}/${id}`)
    }
}