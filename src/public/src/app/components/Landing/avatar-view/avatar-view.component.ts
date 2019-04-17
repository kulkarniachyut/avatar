import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AvatarSelectionService } from '../../../services/avatar-selection.service';
import { AvatarCommunityService } from '../../../services/community/avatar-community.service';
@Component({
  selector: 'app-avatar-view',
  templateUrl: './avatar-view.component.html',
  styleUrls: ['./avatar-view.component.css']
})
export class AvatarViewComponent implements OnInit {
  avatars = [];
  constructor( private avatarSelection: AvatarSelectionService,
      private route: ActivatedRoute, private router: Router,
      private avatarCommunity: AvatarCommunityService) { }

  ngOnInit() {
    this.avatarSelection.getAvatars().subscribe( data => {
      console.log(data.length);
      this.avatars = data;
    });
  }
  redirectToAvatar(avatar) {
    console.log(avatar.serialNumber);
    this.avatarCommunity.generateResults(avatar);
    this.router.navigate(['avatarDetails', {id: avatar.serialNumber}] );

  }

}
