import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faNavicon } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { veiculoService } from 'src/app/services/veiculoService';
import { Veiculo } from 'src/app/models/Veiculo';
import { OrdemServico } from 'src/app/models/OrdemServico';
import { ordemServicoService } from 'src/app/services/ordemServicoService';
import { PaginadorQueryId } from 'src/app/seletores/PaginadorQueryId';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-visualizar-os',
  templateUrl: './visualizar-os.component.html',
  styleUrls: ['./visualizar-os.component.css'], 
  providers : [DatePipe],
})
export class VisualizarOSComponent implements OnInit {
  public faPlusCircle = faPlusCircle;
  public faNavicon = faNavicon;
  public id = '' ;
  public listaVeiculosPorId: Veiculo = new Veiculo() ;
  public listaOrdemServicoPorVeiculo: OrdemServico = new OrdemServico();
  public PageNumber = 1;
  public PageSize = 8;
  public TotalLista = 0;
  public ParamId = 0;
  public data = new Date();

  
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    public veiculoService: veiculoService,
    public router: Router,
    public changeDetector: ChangeDetectorRef,
    public ordemServicoService: ordemServicoService,
  ){
    this.id = this.activatedRoute.snapshot.params["id"];
    this.ParamId = this.activatedRoute.snapshot.params["id"];
    
    
  }

  public pageChange(page: any) {
    this.PageNumber = page;
    this.listarOrdemServicoPorVeiculo();
}
  
  public listarVeiculoPorId(){
    this.veiculoService.ListarVeiculoPorId(this.id).subscribe(res => {
      this.listaVeiculosPorId = res.data;
      //console.log(this.listaVeiculosPorId);
     
    })
  }

  public listarOrdemServicoPorVeiculo(){
    let Paginador = new PaginadorQueryId();
        Paginador.PageNumber = this.PageNumber;
        Paginador.PageSize = this.PageSize;
        Paginador.ParamId = this.ParamId;

    this.ordemServicoService.ListarOrdemServicoPorVeiculo(Paginador).subscribe(res => {
      this.listaOrdemServicoPorVeiculo = res.data;
      this.TotalLista = res.totalCount;
       console.log(this.listaOrdemServicoPorVeiculo);
    })
  }
  
  
  
  ngOnInit(): void {
    this.listarVeiculoPorId();
    this.listarOrdemServicoPorVeiculo();
  }



}
