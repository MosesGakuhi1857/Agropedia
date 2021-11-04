import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgroService } from '../agro-service/agro.service';

@Component({
  selector: 'app-search-plant',
  templateUrl: './search-plant.component.html',
  styleUrls: ['./search-plant.component.css']
})
export class SearchPlantComponent implements OnInit {

  
  submitted = false;
 

  constructor(private _agroservice: AgroService) {

  }

  nitrogen!:any;
  phosphorous!:any;
  potassium!:any;
  temperature!:any;
  humidity!:any;
  ph!:any;
  rainfall!:any;

  suggestion!:any

  

  onSubmit(formvals:any) {
    this.submitted = true;
    this._agroservice.getResults(formvals.nitrogen,formvals.phosphorous,formvals.potassium,formvals.temperature,formvals.humidity,formvals.ph,formvals.rainfall).subscribe((data)=>{
    this.suggestion=data.result
      console.log(this.suggestion)
    })
    
      
  }

  ngOnInit(): void {
  }

}


