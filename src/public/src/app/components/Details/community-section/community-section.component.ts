import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { AvatarCommunityService } from '../../../services/community/avatar-community.service';
import { AvatarSelectionService } from '../../../services/avatar-selection.service';
import { PostsService } from '../../../services/localStorage/posts.service';

@Component({
  selector: 'app-community-section',
  templateUrl: './community-section.component.html',
  styleUrls: ['./community-section.component.css']
})

export class CommunitySectionComponent implements OnInit {
  avatarCommuntiy = [];
  presentUser = null;
  comment = '';
  posts = [];
  presentCommunity = '';
  constructor(private route: ActivatedRoute, private router: Router,
     private avatarCommunity: AvatarCommunityService, private avatarSelection: AvatarSelectionService,
    private postService: PostsService) { }

  ngOnInit() {
    this.avatarSelection.getAvatars().subscribe( avatarData => {
      this.presentUser = avatarData[this.route.snapshot.params.id - 1 ];
      this.avatarCommunity.sendAvatar(avatarData[this.route.snapshot.params.id]);
    });
    this.avatarCommunity.getResults().subscribe( data => {
      console.log(data);
      this.avatarCommuntiy = data;
    });
  }
  localStoragePost({value, valid}: {value, valid: boolean}) {
    this.postService.setHistoryData({comment: this.comment, avatar: this.presentUser });
    this.comment = '';
  }

}
