import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/login/services/auth.service';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.component.html',
  styleUrls: ['./deshboard.component.scss']
})
export class DeshboardVendedorasComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.vendedoraUserValue);
  }

}
