import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/User-service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
  //Head title
  heading = 'Utilisateurs';
  subheading = "Liste des employés dans l'entreprise.";
  icon = 'pe-7s-id icon-gradient bg-happy-itmeo';


  public users: User[];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.getusers();
  }
  public getusers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
