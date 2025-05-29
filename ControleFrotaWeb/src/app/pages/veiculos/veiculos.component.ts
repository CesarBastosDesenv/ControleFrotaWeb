import { Component, OnInit } from '@angular/core';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {
  public faListCheck = faListCheck;

  ngOnInit(): void { 
   
    }
}
