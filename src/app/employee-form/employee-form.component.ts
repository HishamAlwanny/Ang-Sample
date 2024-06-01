import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
    selector: 'app-employee-form',
    templateUrl: './employee-form.component.html',
    styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
    dataForm: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.dataForm = this._fb.group({
            periodDate: ['', Validators.required],
            employees: this._fb.array([])
        });
    }

    ngOnInit(): void {
        this.setFormData(FORM_DATA[0]);
    }

    createEmployeeGroup(employee: any): FormGroup {
        return this._fb.group({
            fullName: [employee.fullName, Validators.required],
            isIncluded: [employee.isIncluded, Validators.required],
        });
    }

    get employees(): FormArray {
        return this.dataForm.get('employees') as FormArray;
    }

    setFormData(data: any): void {
        this.dataForm.patchValue({
            periodDate: this.formatDate(data.periodDate)
        });

        data.employees.forEach((employee: any) => {
            this.employees.push(this.createEmployeeGroup(employee));
        });
    }

    formatDate(dateString: string): string {
        const dateParts = dateString.split('/');
        const formattedDate = new Date(
            parseInt(dateParts[2], 10),
            parseInt(dateParts[0], 10) - 1,
            parseInt(dateParts[1], 10)
        );
        return formattedDate.toISOString().split('T')[0]; // Format date as yyyy-MM-dd
    }

    addEmployee(): void {
        this.employees.push(this.createEmployeeGroup({ fullName: '', isIncluded: false }));
    }

    removeEmployee(index: number): void {
        this.employees.removeAt(index);
    }

    onSubmit(): void {
        if (this.dataForm.valid) {
            console.log(this.dataForm.value);
        }
    }
}

// Mock data source
const FORM_DATA = [
    {
        periodDate: "1/1/2000",
        employees: [
            { fullName: 'John Smith', isIncluded: true },
            { fullName: 'Muhi Masri', isIncluded: false },
            { fullName: 'Peter Adams', isIncluded: true },
            { fullName: 'Lora Bay', isIncluded: false }
        ]
    }
];

interface idata {
    periodDate: Date,
    employees: [
        { fullName: string, isIncluded: boolean }
    ]
}