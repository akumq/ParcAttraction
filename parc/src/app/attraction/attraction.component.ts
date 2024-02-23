import { Component } from '@angular/core';


import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';

import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-attraction',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,CommonModule, MatCardModule],
  templateUrl: './attraction.component.html',
  styleUrl: './attraction.component.scss'
})
export class AttractionComponent {
  
  constructor(public attractionService: AttractionService)
  {

  }
  
  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttractionVisible()

}
