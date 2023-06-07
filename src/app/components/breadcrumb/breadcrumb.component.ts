import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less'],
})
export class BreadcrumbComponent implements OnInit {
  public href: string = '';

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.href = this.router.url;

    switch (this.router.url) {
      case '/register':
        this.href = 'Registro';
        break;
      case '/forgotten-password':
        this.href = 'Contraseña olvidada';
        break;
    }
  }
}
