import { Component, Input } from '@angular/core';
import { DataHorse } from 'src/models/allDataHorse';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  @Input() dataHorse: DataHorse;
}
