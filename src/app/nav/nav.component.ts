import { Component, OnInit} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  RouterLink: RouterModule;

  constructor() { }

  ngOnInit(): void {
  }

}
