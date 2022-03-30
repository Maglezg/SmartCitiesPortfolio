import { Component, OnInit } from '@angular/core';

import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  equipo: any='';

  constructor(private infoPaginaService: InfoPaginaService ) { }

  ngOnInit(): void {
    this.infoPaginaService.getDatosEquipo()
    .subscribe((resp: any)=>{
      console.log(resp);
      this.equipo = resp;
    })

  }

}
