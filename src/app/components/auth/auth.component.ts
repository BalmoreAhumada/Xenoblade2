import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  user: User;

  constructor() {
    this.user = new User();
  }

  onSubmit() {
    if(!this.user.username || !this.user.password) {
      Swal.fire('Error de validacion', 'Username and password are required', 'error');
    }else{
      console.log(this.user);
    }
  }
}
