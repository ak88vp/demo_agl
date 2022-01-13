import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    // @ts-ignore
    let numberA=+document.getElementById("numberA").value;
    // @ts-ignore
    let numberB=+document.getElementById("numberB").value;

    // @ts-ignore
    document.getElementById("result").innerHTML=numberA + numberB;
  }
  subtraction1(){
    // @ts-ignore
    let numberA=+document.getElementById("numberA").value;
    // @ts-ignore
    let numberB=+document.getElementById("numberB").value;

    // @ts-ignore
    document.getElementById("result").innerHTML=numberA - numberB;
  }
  multiplication11(){
    // @ts-ignore
    let numberA=+document.getElementById("numberA").value;
    // @ts-ignore
    let numberB=+document.getElementById("numberB").value;

    // @ts-ignore
    document.getElementById("result").innerHTML=numberA * numberB;
  }
  division(){
    // @ts-ignore
    let numberA=+document.getElementById("numberA").value;
    // @ts-ignore
    let numberB=+document.getElementById("numberB").value;

    // @ts-ignore
    document.getElementById("result").innerHTML=numberA / numberB;
  }

}
