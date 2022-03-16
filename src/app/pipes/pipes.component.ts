import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name:string = "angular";

  name2:string = "TYPESCRIPT";

  //sintaxis {{valorpo | number N1.N2-N3}}
  //N1 cantidad de numeros enteros
  //N2 cantidad minima de decimales
  //N3 cantidad maxima de decimales

  valorpi:number=3.141592;

  myNum = 0.589;

  salary = 3500.5

  personaje={
    name:'Mr. Bean',
    alias:'Bean',
    song: 'Toxicity',
    skills:['driver','makes people nervous'],
    youtubeChannel: 'Mr.Bean Show',
    address:{
      street:'Elm Street',
      number:3,
      city:'LiverPool'
    }
  }

  promiseValue = new Promise((resolve,reject)=>{

    setTimeout(()=>

      {
        resolve('esto funcionó después de 3s');
      },3000

    );

  });

  myDate = new Date();

  nombres:string[] = ['ado', 'rivaldo', 'donovan'];


  trabajador2={
    name:'Alfonso',
    alias:'Chonso',
    gender:'male',
    id: '01000001a',
  }

  trabajador1={
    name:'Marisa',
    alias:'Mari',
    gender:'female',
    id: '021345123f',
  }




  constructor() { }

  ngOnInit(): void {
  }

}
