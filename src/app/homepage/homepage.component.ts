import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AgroService } from '../agro-service/agro.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  plants:any[]=[]

  constructor(private agroservice:AgroService) { 
    
  }
  
  ngOnInit(): void {
    this.agroservice.getData().subscribe((res:any)=>{
      this.plants=res
    })
  }

}
