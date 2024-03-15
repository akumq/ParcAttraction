import { Component } from '@angular/core';


import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { Observable, merge } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { CritiqueInterface } from '../Interface/critique.interface';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-attraction',
  standalone: true,
  imports: [ReactiveFormsModule,MatExpansionModule,MatSliderModule, MatInputModule,MatButtonModule,MatIconModule,CommonModule, MatCardModule],
  templateUrl: './attraction.component.html',
  styleUrl: './attraction.component.scss'
})
export class AttractionComponent {
  
  formulaireCritique = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    score: new FormControl(''),
    text: new FormControl(''),
  });

  constructor(public attractionService: AttractionService)
  {

  }

  public critiqueFormulaire: FormGroup[] = [];
  
  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttractionVisible()

  public critiques : Observable<CritiqueInterface[]> = this.attractionService.getAllCritique();



  public onSubmit(critiqueFormulaire: FormGroup, attraction_id : number | null) {
    var critique : CritiqueInterface=  critiqueFormulaire.value
    if(attraction_id) {
      critique.attraction_id = attraction_id;
    
      if(!critique.score){
        critique.score = 3;
      }
      this.attractionService.postCritique(critique).subscribe(result => {
        console.log(result);
        this.attractions = this.attractionService.getAllAttractionVisible()
      })

    }else{
      console.error("attraction id manquant")
    }
  }

}
