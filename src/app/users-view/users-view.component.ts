import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {

  user = <any>[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(){
    this.httpClient.get("http://localhost:8000/user").subscribe(response => {
      this.user = response;
    })

  }
  delete(user_id: any){
    this.httpClient.delete("http://localhost:8000/user/" + user_id.id).subscribe
    console.log('Eliminado Usuario');
    let eliminar = this.user.indexOff(user_id, 0);
    if(eliminar > -1){
      this.user.splice(eliminar, 1);
    }
  }
}
