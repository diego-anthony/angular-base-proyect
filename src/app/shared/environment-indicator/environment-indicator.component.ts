import { Component, OnInit } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-environment-indicator',
  templateUrl: './environment-indicator.component.html',
  styleUrls: ['./environment-indicator.component.scss']
})
export class EnvironmentIndicatorComponent implements OnInit {
  environmentName: string;

  constructor() { }

  ngOnInit(): void {
    this.environmentName = environment.environmentName;
  }

}
