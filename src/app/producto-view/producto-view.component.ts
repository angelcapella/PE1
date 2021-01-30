import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-producto-view',
  templateUrl: './producto-view.component.html',
  styleUrls: ['./producto-view.component.css']
})

export class ProductoViewComponent implements OnInit {

  products = <any>[];
  

  constructor(private httpClient: HttpClient){}
  

  ngOnInit(){
    this.httpClient.get("http://localhost:8000/products").subscribe(response => {
      this.products = response;
    })

  }

  delete(product_id: any){
    this.httpClient.delete("http://localhost:8000/products/" + product_id.id).subscribe
    console.log('Eliminado Producto');
    let eliminar = this.products.indexOff(product_id, 0);
    if(eliminar > -1){
      this.products.splice(eliminar, 1);
    }
  }
  

}
