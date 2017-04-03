import { Component, OnInit } from '@angular/core';
import { User }              from './user'
import { UserService }       from './user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
    user:User
    constructor(private userService:UserService) {}
    ngOnInit(){
        this.initUser()
    }
    initUser():void{
        this.userService.getUser().then(user=>this.user=user)
    }
    Save():void{
        this.userService.update(this.user).then(()=>null)
    }
    delete(edu:number):void{
        //this.user.education=this.user.education.filter(x=>x!==edu)
        //this.user.education.splice(this.user.education.indexOf(edu),1)
        this.user.education.splice(edu,1)
    }
    addnew():void{
        this.user.education.push('')
    }
}
