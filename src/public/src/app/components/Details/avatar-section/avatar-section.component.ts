import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AvatarSelectionService } from '../../../services/avatar-selection.service';
import { AvatarCommunityService } from '../../../services/community/avatar-community.service';
@Component({
  selector: 'app-avatar-section',
  templateUrl: './avatar-section.component.html',
  styleUrls: ['./avatar-section.component.css']
})
export class AvatarSectionComponent implements OnInit {
  avatars = [];
  constructor( private avatarSelection: AvatarSelectionService,
      private route: ActivatedRoute, private router: Router,
      private avatarCommunity: AvatarCommunityService) { }
  selectedAvatar;
  ngOnInit() {
    this.route.params.subscribe( data => {
      // console.log('Params are ', data );
      this.avatarSelection.getAvatars().subscribe( avatarData => {
        // console.log(data.length);
        this.avatars = avatarData;
        this.selectedAvatar = this.route.snapshot.params.id;
        this.avatarCommunity.generateResults(this.avatars[this.selectedAvatar]);
      });
    });

  }
  redirectToAvatar(avatar) {
    // console.log(avatar.serialNumber);
    this.router.navigate(['avatarDetails', {id: avatar.serialNumber}] );
  }

}
