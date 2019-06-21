import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CachorroService } from '../cachorro.service';

@Component({
  selector: 'app-cachorro-detalhe',
  templateUrl: './cachorro-detalhe.page.html',
  styleUrls: ['./cachorro-detalhe.page.scss'],
})
export class CachorroDetalhePage implements OnInit {

  detalhes = null;

  constructor(private activatedRoute: ActivatedRoute, private filmeService: CachorroService) { }

  ngOnInit() {
    debugger
    // pega o id da rota
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    // busca na API os dados do id
    this.filmeService.getFilmesById(id).subscribe(result => {
      this.detalhes = result;
      console.log(this.detalhes);
    });
  }

  abrirLinkExterno() {
    // window.open é nativo do JS
    window.open(this.detalhes.Website, '_blank');
  }

}
