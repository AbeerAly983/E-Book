import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/interfaces/User';
import { ProfileService } from 'src/app/services/admin/profile.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css'],
})
export class AdminProfileComponent {
  userData: Profile;
  ngOnInit(): void {
    this.getUserProfile();
  }
  constructor(private service: ProfileService, private router: Router) {
    if (!localStorage.getItem('access_token')) {
      this.router.navigate(['/login']);
    }
  }
  getUserProfile() {
    const token = localStorage.getItem('access_token');
    this.service.userProfile(token).subscribe(
      (data: any) => {
        this.userData = data;
        console.log(data);
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
}
