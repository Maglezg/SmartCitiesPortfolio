import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id:any =''
  producto: any;

  constructor(private activeRoute: ActivatedRoute,
              private productService: ProductsService){ }

  ngOnInit(): void {

    this.id = this.activeRoute.snapshot.paramMap.get('id');

    this.productService.getProduct(this.id)
    .subscribe((resp:any) => {

      console.log(resp);
      this.producto=resp;

    } );

   



  }

}
