import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

import {states} from '../data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    heroForm : FormGroup;
    states = states;

  constructor(private fb: FormBuilder) { 
      this.createForm();
  }

  createForm()
  {

      this.heroForm= this.fb.group(
      {
        name: ['', [Validators.minLength(2),Validators.maxLength(5)]],
        address: this.fb.group(
        {
            street : '',
            city : '',
            state: '',
            zip: ''            
        }),
        power: ''
      });
  }

  ngOnInit() {
  }

}
