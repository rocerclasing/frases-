import { Injectable } from '@angular/core';
import{FraseComponent} from'src/app/components/frase/frase.component';

@Injectable({
  providedIn: 'root'
})
export class FraseService {

  frase:Frase[] = [
    {
      title:"El horizonte",
      img:"assets/img/horizonte.png",
      description:"El horizonte del mar se ve hermoso",
      text:"Todos vivimos bajo el mismo cielo, pero ninguno tiene el mismo horizonte."
    },

    {
      title:"El horizonte",
      img:"assets/img/horizonte.png",
      description:"El horizonte del mar se ve hermoso",
      text:"Todos vivimos bajo el mismo cielo, pero ninguno tiene el mismo horizonte."
    },

    {
      title:"El horizonte",
      img:"assets/img/horizonte.png",
      description:"El horizonte del mar se ve hermoso",
      text:"Todos vivimos bajo el mismo cielo, pero ninguno tiene el mismo horizonte."
    },

    {
      title:"El horizonte",
      img:"assets/img/horizonte.png",
      description:"El horizonte del mar se ve hermoso",
      text:"Todos vivimos bajo el mismo cielo, pero ninguno tiene el mismo horizonte."
    },

    {
      title:"El horizonte",
      img:"assets/img/horizonte.png",
      description:"El horizonte del mar se ve hermoso",
      text:"Todos vivimos bajo el mismo cielo, pero ninguno tiene el mismo horizonte."
    },
    {
      title:"El horizonte",
      img:"assets/img/horizonte.png",
      description:"El horizonte del mar se ve hermoso",
      text:"Todos vivimos bajo el mismo cielo, pero ninguno tiene el mismo horizonte."
    }

  ];

  constructor() { }

  getFrase():Frase[]
  {
    return this.frase;

  }
}

export interface Frase
{
  title:string,
  img:string,
  description:string,
  text:string;


}
