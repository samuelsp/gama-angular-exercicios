import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  contador = 0;
  constructor() { }

  ngOnInit() {
  }

  onAddBtnClick() {
    this.contador++
  }

  onSubBtnClick() {
    this.contador--;
  }

}
