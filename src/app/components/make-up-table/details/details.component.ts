import { Component, Inject } from '@angular/core';
import { InfoUser } from 'src/models/usersModels';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  public photos: string = 'more photos';
  public morePhotos: boolean = false;

  public constructor(@Inject(MAT_DIALOG_DATA) public data: InfoUser) {}

  public switchMorePhotos(): void {
    this.morePhotos
      ? (this.photos = 'more photos')
      : (this.photos = 'hide photos');
    this.morePhotos = !this.morePhotos;
  }
}
