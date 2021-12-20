import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestApiDataService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  apiUrl = "http://localhost:3000"

  doGet() : any{
    return this.http.get(this.apiUrl + "/blog")
  }

  doPost(blog: any){
    return this.http.post(this.apiUrl + "/blog", blog, this.httpOptions)
  }

  doGets(id: any){
    let blogId : String = id;
    return this.http.get(this.apiUrl + "/blog/" + blogId)
  }

  doUpdate(body: any){
    let blogId : String = body._id;
    return this.http.put(this.apiUrl + "/blog/" + blogId, body, this.httpOptions)
  }

  doDelete(id: any){
    let blogId : String = id;
    return this.http.delete(this.apiUrl + "/blog/" + blogId)
  }

}
