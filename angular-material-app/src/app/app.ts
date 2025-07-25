import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MaterialCardComponent } from './material-card/material-card';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, MatButtonModule, MaterialCardComponent, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-material-app');

  constructor(private http: HttpClient, private router: Router) {}

  logout() {
    this.http.post('/api/logout', {})
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
}
