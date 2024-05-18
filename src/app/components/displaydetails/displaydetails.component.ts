import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockapiService } from '../../services/mockapi.service';
import { companyDetails } from '../../interfaces/interfacecomponent';

@Component({
  selector: 'app-displaydetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './displaydetails.component.html',
  styleUrl: './displaydetails.component.css'
})
export class DisplaydetailsComponent implements OnInit {

  constructor(private _mockapi:MockapiService){}
  results:companyDetails[]=[];
  //invoke getCompanies
  ngOnInit(): void {
    this.getCompanies();
  }
  //use service to get companydata
  getCompanies(): boolean {
    this._mockapi.getCompanyDetails().subscribe(
      companyData => {
        this.results=companyData;
        console.log(this.results);
      }
    )
    return false;
  }
}
