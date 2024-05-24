import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
    productForm: FormGroup;
    id: string;
    product!: Product;

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.crudService.getById(this.id)
            .subscribe((res: any) => {
                this.product = res;
                this._buildForm();
            })
    }

    constructor(
        public fb: FormBuilder,
        public crudService: CrudService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.productForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required],
            price: ['', Validators.required],
            quantity: ['', Validators.required]
        });
        this.id = '';
    }

    submitForm(productForm: any) {
        this.crudService.update(this.id, this.productForm.value)
            .subscribe(res => {
                console.log('product updated')
                this.router.navigateByUrl('/crud')
            })
    }

    private _buildForm(): void {
        this.productForm = this.fb.group({
            name: [this.product.name, Validators.required],
            description: [this.product.description, Validators.required],
            price: [this.product.price],
            quantity: [this.product.quantity]
        });
    }
}
