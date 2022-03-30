import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  fecha: any = new Date().getFullYear();
  datosPag: any='';

  constructor(private infoPaginaService: InfoPaginaService) { 
    
  }

  ngOnInit(): void {
   
  this.infoPaginaService.getinfoPag()
  .subscribe((resp: any)=>{

    console.log(resp);
    this.datosPag = resp;
   });

  }

}
