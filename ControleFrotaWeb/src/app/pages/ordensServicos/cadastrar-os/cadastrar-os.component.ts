import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ordemServicoService } from 'src/app/services/ordemServicoService';
import { ActivatedRoute, Router } from "@angular/router";
import { veiculoService } from 'src/app/services/veiculoService';
import { Veiculo } from 'src/app/models/Veiculo';


@Component({
  selector: 'app-cadastrar-os',
  templateUrl: './cadastrar-os.component.html',
  styleUrls: ['./cadastrar-os.component.css'], 
  

})
export class CadastrarOSComponent implements OnInit {
  public form: FormGroup;
  public listaVeiculosPorId: Veiculo = new Veiculo() ;
  public id = '' ;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    public veiculoService: veiculoService,
    public formBuilder : FormBuilder,
    public router: Router,
    private rest : ordemServicoService,
   
  ){
    this.id = this.activatedRoute.snapshot.params["id"],
    this.form = this.formBuilder.group({
          veiculoId : this.activatedRoute.snapshot.params["id"],
          dtServico: new FormControl('',[Validators.required,Validators.maxLength(30)]),
          tipoManutencao : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          defeitoApresentado : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          executor : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          valorMaoObra : new FormControl('',[Validators.required,Validators.maxLength(30)]),
          status : true,
        })
  }

  salvarDados(){
    this.rest.CadastrarOrdemServico(this.form.value).subscribe(result => []);
    this.form.reset();
    //this.router.navigate(['/'])
    
  } 

  public listarVeiculoPorId(){
    this.veiculoService.ListarVeiculoPorId(this.id).subscribe(res => {
      this.listaVeiculosPorId = res.data;
      //console.log(this.listaVeiculosPorId);
     
    })
  }

  
  ngOnInit(): void {
    this.listarVeiculoPorId();
  }
}
