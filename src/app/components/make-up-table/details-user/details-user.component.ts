import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';

import { InfoUser } from 'src/models/usersModels';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss'],
})
export class DetailsUserComponent implements OnInit {
  public infoUser: InfoUser;
  public infoUserSubscription: Subscription;
  public photos: string = 'more photos'
  public morePhotos: boolean = false;

  public constructor(private route: ActivatedRoute) {}

  public switchMorePhotos(): void {
    this.morePhotos
      ? (this.photos = 'more photos')
      : (this.photos = 'hide photos');
    this.morePhotos = !this.morePhotos;
  }

  public ngOnInit(): void {
    this.infoUserSubscription = this.route.data.subscribe((data: any) => {
      this.infoUser = data['data'];
    });
  }
}
