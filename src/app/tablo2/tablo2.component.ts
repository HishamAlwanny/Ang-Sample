import { Component } from '@angular/core';

@Component({
  selector: 'app-tablo2',
  templateUrl: './tablo2.component.html',
  styleUrls: ['./tablo2.component.css']
})
export class Tablo2Component {
    displayedColumns: string[] = ['name', 'occupation', 'age', "isEdit"];
    dataSource: any = USER_DATA;
    columnsSchema: any = COLUMNS_SCHEMA;
}

const USER_DATA = [
    {"name": "John Smith", "occupation": "Advisor", "dateOfBirth": "1984-05-05", "age": 36},
    {"name": "Muhi Masri", "occupation": "Developer", "dateOfBirth": "1992-02-02", "age": 28},
    {"name": "Peter Adams", "occupation": "HR", "dateOfBirth": "2000-01-01", "age": 20},
    {"name": "Lora Bay", "occupation": "Marketing", "dateOfBirth": "1977-03-03", "age": 43},
]

const COLUMNS_SCHEMA = [
    {
        key: "name",
        type: "text",
        label: "Full Name"
    },
    {
        key: "occupation",
        type: "text",
        label: "Occupation"
    },
    {
        key: "age",
        type: "number",
        label: "Age"
    },
    {
        key: "isEdit",
        type: "isEdit",
        label: ""
    }
  ]