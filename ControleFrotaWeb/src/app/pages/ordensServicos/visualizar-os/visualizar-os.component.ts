import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { veiculoService } from 'src/app/services/veiculoService';
import { Veiculo } from 'src/app/models/Veiculo';

@Component({
  selector: 'app-visualizar-os',
  templateUrl: './visualizar-os.component.html',
  styleUrls: ['./visualizar-os.component.css']
})
export class VisualizarOSComponent implements OnInit {
  public faPlusCircle = faPlusCircle;
  public id = '' ;
  public listaVeiculosPorId: Veiculo = new Veiculo() ;
  
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    public veiculoService: veiculoService,
    public router: Router,
    public changeDetector: ChangeDetectorRef
  ){
    this.id = this.activatedRoute.snapshot.params["id"];
    
    
  }
  
  public listarVeiculoPorId(){
    this.veiculoService.ListarVeiculoPorId(this.id).subscribe(res => {
      this.listaVeiculosPorId = res.data;
      console.log(this.listaVeiculosPorId);
     
    })
  }
  
  
  
  ngOnInit(): void {
    this.listarVeiculoPorId();
  }



}
