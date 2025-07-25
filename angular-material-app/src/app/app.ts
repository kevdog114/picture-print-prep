import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MaterialCardComponent } from './material-card/material-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, MatButtonModule, MaterialCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-material-app');
}
