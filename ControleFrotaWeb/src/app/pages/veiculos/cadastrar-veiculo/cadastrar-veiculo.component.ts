import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { veiculoService } from 'src/app/services/veiculoService';

@Component({
  selector: 'app-cadastrar-veiculo',
  templateUrl: './cadastrar-veiculo.component.html',
  styleUrls: ['./cadastrar-veiculo.component.css']
})
export class CadastrarVeiculoComponent implements OnInit{
  public form: FormGroup;

  constructor(
    public formBuilder : FormBuilder,
    private rest : veiculoService
  ){
    this.form = this.formBuilder.group({
      veiculoNome : new FormControl('',[Validators.required,Validators.maxLength(30)]),
      status : true,
    })
  }

  salvarDados(){
    this.rest.CadastrarVeiculo(this.form.value).subscribe(result => []);
    this.form.reset();
  }
  ngOnInit(): void {
    
  }
}
