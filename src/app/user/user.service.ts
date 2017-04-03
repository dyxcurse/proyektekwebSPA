import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
//import { Observable } from 'rxjs/Observable'
import { User } from './user'

@Injectable()
export class UserService {
    private UserUrl = 'api/user'
    private headers = new Headers({'Content-Type': 'application/json'})
    constructor(private http:Http){}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred: ', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getUser(): Promise<User> {
    return this.http.get(this.UserUrl)
            .toPromise()
            .then(response =>response.json().data as User)
            .catch(this.handleError)
    }

    /*getUser(id: number): Observable<User>//Promise<User> 
    {
        const url = `${this.UserUrl}/${id}`
        return this.http.get(url).map(response => response.json().data as User)
            //.toPromise()
            //.then(response => response.json().data as User)
            .catch(this.handleError)
    }*/

    update(user: User): Promise<User> {
        const url = `${this.UserUrl}/${user.id}`
        return this.http
            .put(url, JSON.stringify(user), {headers:this.headers})
            .toPromise()
            .then(() => user)
            .catch(this.handleError);
    }

    create(name: string,email:string,phone:string,joindate:Date): Promise<User> {
        return this.http
            .post(this.UserUrl, JSON.stringify({name,email,phone,joindate}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as User)
            .catch(this.handleError)
    }

    delete(id: number): Promise<void> {
        const url = `${this.UserUrl}/${id}`
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError)
    }
}