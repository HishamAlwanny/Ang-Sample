import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tablo',
  templateUrl: './tablo.component.html',
  styleUrls: ['./tablo.component.css']
})
export class TabloComponent {
    displayedColumns: string[] = ['name','surname'];

    myformArray = new FormArray([
      new FormGroup({
        name: new FormControl("uno"),
        surname: new FormControl("one")
      }),
      new FormGroup({
        name: new FormControl("dos"),
        surname: new FormControl("two")
      }),
      new FormGroup({
        name: new FormControl("tres"),
        surname: new FormControl("three")
  
      })])
      
    dataSource = this.myformArray.controls;
}
