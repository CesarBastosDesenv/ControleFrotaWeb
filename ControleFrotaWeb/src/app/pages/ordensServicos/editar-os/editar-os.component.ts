import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-editar-os',
  templateUrl: './editar-os.component.html',
  styleUrls: ['./editar-os.component.css']
})
export class EditarOSComponent implements OnInit {
  public faPlusCircle = faPlusCircle

  ngOnInit(): void {
    
  }

}
