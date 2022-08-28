import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../../Services/User-service/user.service';
import { User } from '../../../models/user';


@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class ProfileImageComponent implements OnInit {
  imageToShow: any = null;
  check: Boolean = true;
  name: String;
  @Input() user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.name = this.getTitle(this.user);
    this.userService.fetchProfileImage(this.user.email).subscribe(image => this.createImage(image)
      , (error) => {
        console.error('error caught in component')
        this.check = false;
      })
  }
  private createImage(image: Blob) {
    if (image && image.size > 0) {
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        this.imageToShow = reader.result;
      }, false);
      reader.readAsDataURL(image);
    }
  }
  public getTitle(user: User) {
    let str = "";
    str = user.nom.charAt(0).toUpperCase() + user.prenom.charAt(0).toUpperCase();
    console.log(str);
    return str;
  }
}