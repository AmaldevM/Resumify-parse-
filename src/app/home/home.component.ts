// home.component.ts
import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeaturesComponent } from './features/features.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    ContactusComponent,
    FeaturesComponent,
    NavbarComponent,
    MatIconModule,
    MatButtonModule,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
