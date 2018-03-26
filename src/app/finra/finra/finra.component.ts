import { Component, OnInit } from '@angular/core';
import { FinraService } from '../../shared/services/finra.service';
import { FormControl, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-finra',
  templateUrl: './finra.component.html',
  styleUrls: ['./finra.component.css']
})
export class FinraComponent implements OnInit {

  currentCombinations: string[] = [];
  currentPage = 0;
  inputForm: FormGroup
  error: HttpErrorResponse;
  paginationValue = 10;
  loader = false;
  constructor(private service: FinraService, private fb: FormBuilder) { }

  ngOnInit() {

    this.inputForm = this.fb.group({
      phoneNumber: ['', this.phoneNumberLengthValidation],
      throttle: this.paginationValue
    })

    // this.service.fetchMappings().subscribe(mapping => console.log(mapping));
  }

  phoneNumberLengthValidation(c: AbstractControl) {
    if (c.value && c.value.toString().length !== 7 && c.value.toString().length !== 10 && c.value.toString().length !== 13) {

      return { illegalLength: 'The phone number has to be positive and either 7 or 10 digits long.' }
    }
    return null;
  }

  submit() {
    this.loader = true;
    this.service.postInputAndFetchCombinations(this.inputForm.get('phoneNumber').value, this.inputForm.get('throttle').value || this.paginationValue).subscribe(combinations => {
      this.currentPage = 0;
      this.currentCombinations = combinations;
      this.currentPage++;
      this.loader = false;
    }, (error) => {
      this.error = error;
      this.currentPage--;
      this.loader = false;

    })

  }

  isPreviousActive() {
    return this.currentPage > 1;
  }

  isNextActive() {
    return this.currentPage !== 0 &&
      (this.currentCombinations.length === this.inputForm.get('throttle').value || this.currentCombinations.length === this.inputForm.get('throttle').value);
  }
  getNextCombinations() {
    this.loader = true;
    this.currentPage++;
    this.service.fetchCombinationsByPage(this.inputForm.get('phoneNumber').value, this.currentPage, this.inputForm.get('throttle').value || this.paginationValue).subscribe(combinations => {
      this.currentCombinations = combinations;
      this.loader = false;
    }, (error) => this.error = error)
  }

  getPreviousCombinations() {
    this.loader = true;
    this.currentPage--;
    this.service.fetchCombinationsByPage(this.inputForm.get('phoneNumber').value, this.currentPage, this.inputForm.get('throttle').value || this.paginationValue).subscribe(combinations => {
      this.currentCombinations = combinations;
      this.loader = false;
    }, (error) => this.error = error)
  }
}
