import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public url: String = "";
  public onClick(){
    // alert("okeeey");
    this.url = "../displayshops/displayshops.component.html";

  }

}
