import { Component, OnInit } from '@angular/core';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { PaginadorQuery } from 'src/app/seletores/PaginadorQuery';
import { Veiculo } from 'src/app/models/Veiculo';
import { veiculoService } from 'src/app/services/veiculoService';



@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {
  public listaVeiculos:Veiculo[] = [];
  public faListCheck = faListCheck;
  public PageNumber = 1;
  public PageSize = 8;
  public TotalLista = 0;

  constructor(
    public veiculoService : veiculoService,
    private rest : veiculoService
  ){}

  public pageChange(page: any) {
    this.PageNumber = page;
    this.listarVeiculos();
}

  listarVeiculos(){
    let Paginador = new PaginadorQuery();
    Paginador.PageNumber = this.PageNumber;
    Paginador.PageSize = this.PageSize;

    this.veiculoService.ListarVeiculo(Paginador).subscribe(res => {
      this.listaVeiculos = res.data;
      this.TotalLista = res.totalCount;
    })
  }

  

  ngOnInit(): void { 
   this.listarVeiculos();
    }
}
