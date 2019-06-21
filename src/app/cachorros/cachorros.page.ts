import { Component, OnInit } from '@angular/core';
import { CachorroService } from './cachorro.service';

@Component({
  selector: 'app-cachorros',
  templateUrl: './cachorros.page.html',
  styleUrls: ['./cachorros.page.scss'],
})
export class CachorrosPage implements OnInit {

  resultado: any;
  termoDeBusca: string;

  constructor(private filmesService: CachorroService) { }

  ngOnInit() {
    //this.filmesService.consultaFilmes('The Flash');
  }

  async consultaFilmesAssincrono(): Promise<any>{
    this.resultado = await this.filmesService.consultaFilmesAssincrono(this.termoDeBusca).toPromise();
    console.log(this.resultado);
  }

}
