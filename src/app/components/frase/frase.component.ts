
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ FraseService,Frase} from 'src/app/components/services/frase.service';
@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html'
})
export class FraseComponent implements OnInit {

  frase:Frase[]=[];

  constructor(private _FraseService:FraseService,
              private router:Router) { }

  ngOnInit(): void {

     this.frase = this._FraseService.getFrase();
    
   
  }

 
  

}
