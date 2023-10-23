import { FormControl } from "@angular/forms";
import { ScoringForm, UsedKindBusinessIdent } from "src/app/main/Utils/SendScoreDataClasses";
import { bank_list, credit_history_of_spouse_repaiment_status, vid_deyatilnosti } from "../scoring/data-select";
import { HttpClient } from "@angular/common/http";

import { Component, ElementRef, ViewChild } from "@angular/core";

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import testJSON from "./dummyJSON";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent {
  @ViewChild("pdfTable")
  pdfTable!: ElementRef;

  banklist = bank_list;
  vid_deyat = vid_deyatilnosti;
  repaiment_status = credit_history_of_spouse_repaiment_status;
  constructor(private http: HttpClient) {}

  step: number = 1;
  scoringForm = new ScoringForm();
  selectedUsedKinOfBusiness: UsedKindBusinessIdent[] = [];
  res?: any = null;
  navTo(goalStep: number) {
    this.step = goalStep;
  }

  scrolNext() {
    this.step += 1;
  }

  scrolPrev() {
    if (this.step != 1) {
      this.step -= 1;
    }
  }

  addOpiuData() {
    this.scoringForm.financial_data.OPiU.addOPiuData();
  }

  removeOpiuData(index: number) {
    this.scoringForm.financial_data.OPiU.removeOPiUData(index);
  }

  addUsedKindOfBusiness() {
    this.scoringForm.financial_data.OPiU.addUsedKindBusiness();
  }

  removeUsedKindOfBusiness(index: number) {
    this.scoringForm.financial_data.OPiU.removeUsedKindBusiness(index);
  }

  checkFormControl(formControl: FormControl): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }

  addLoanInstallmentInput(index: number) {
    // this.scoringForm.financial_data.OPiU.OPiUData[index].addLoanInstallment()
    this.scoringForm.financial_data.OPiU.OPiUData[index].addLoanInstallment();
  }

  removeLoanInstallmentInput(indexOPiUData: number, indexLoanInst: number) {
    this.scoringForm.financial_data.OPiU.OPiUData[indexOPiUData].removeLoanInstallment(indexLoanInst);
    // this.scoringForm.financial_data.OPiU.OPiUData[1].removeLoanInstallment(indexLoanInst);
  }

  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html, __filename: "fileName" };
    pdfMake.createPdf(documentDefinition).download(JSON.stringify(new Date().toISOString().slice(0, 10)));
  }

  private url = "http://192.168.20.121:8000/";

  notValid = false;
  userData = "";

  setUserName() {
    const data = this.scoringForm.getDto();
    this.userData = `${data.total_inf.client_info.last_name} ${data.total_inf.client_info.first_name} ${data.total_inf.client_info.middle_name} | ИНН ${data.total_inf.client_info.inn} `;
  }

  testSumbmit() {
    this.setUserName();
    this.res = testJSON;
    this.step = 0;
  }

  onSumbit() {
    // console.log(this.scoringForm.isValid());
    console.log(JSON.stringify(this.scoringForm.getDto()));
    // if (this.scoringForm.isValid()) {
    this.http.post(this.url + "scoring/math", this.scoringForm.getDto()).subscribe((res) => {
      this.res = res;
      this.step = 0;
    });
    // } else {
    //   this.notValid = true;
    //   setTimeout(() => {
    //     this.notValid = false;
    //     console.log("hello");
    //   }, 5000);
    // }
  }
}
