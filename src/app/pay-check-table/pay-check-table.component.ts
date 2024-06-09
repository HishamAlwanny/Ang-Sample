import { Component } from '@angular/core';

@Component({
  selector: 'app-paycheck-table',
  templateUrl: './pay-check-table.component.html',
  styleUrls: ['./pay-check-table.component.css']
})
export class PayCheckTableComponent {
  companyName = 'ABC Company';
  companyAddress = {
    line1: '2020 Joe B Jackson Parkway,',
    line2: 'Murfreesboro, TN 37127'
  };
  stubNumber = 1694;
  employee = {
    name: 'John',
    id: 6437898,
    ssn: 'XXX-XX-4639',
    address: {
      line1: '402 John Dodd Road,',
      line2: 'Spartanburg, SC 29303'
    }
  };
  paySchedule = 'Weekly';
  payPeriod = {
    start: 'Aug 03, 2020',
    end: 'Aug 10, 2020'
  };
  payDate = 'Aug 16, 2020';
  earnings = [
    { description: 'Overtime (1.5X)', rate: '$375.00', units: '10.00 hrs', total: '$3,750.00', ytd: '$127,500.00' },
    { description: 'Tips', rate: '-', units: '-', total: '$500.00', ytd: '$17,000.00' }
  ];
  deductions = [
    { description: 'Federal Withholding', current: '$919.33', ytd: '$31,257.22' },
    { description: 'FICA - Social Security', current: '$0.00', ytd: '$0.00' },
    { description: 'FICA - Medicare', current: '$61.63', ytd: '$2,095.42' }
  ];
  ytdGross = '$144,500.00';
  ytdDeductions = '$33,352.64';
  ytdNetPay = '$111,147.36';
  gross = '$4,250.00';
  currentDeductions = '$980.96';
  netPay = '$3,269.04';
}