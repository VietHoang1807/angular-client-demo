import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { userLogin } from 'src/app/auth/login/login.component';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  user: any = {};
  listOfData: Observable<any>;
  userUpdate: userLogin = {} as userLogin;

  isVisible: boolean;
  constructor(
    private userService: UserService
  ) { }

  async ngOnInit() {
  }

  async onSearch() {
    this.listOfData = await this.userService.searchUser({});
  }

  onHandlehandleUpdate(data: { email, _id }) {
    this.userUpdate = Object.assign({}, data);
    this.isVisible = true;
  }

  onHandleCancel = () => this.isVisible = false;

  onHandleOk = () => {
    const payload = Object.assign({}, this.userUpdate);
    this.userService.updUser(payload).subscribe(res => {
      if (!res || res.status != 'Ok') {
        alert(res.message);
        return;
      }
      alert('Ok');
      this.onSearch();
      this.isVisible = false;
    })
  }
}
