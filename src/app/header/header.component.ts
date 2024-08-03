import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent 
{
  isdropdownopen = false;
  dropdownItems = ['Option 1', 'Option 2', 'Option 3'];

  toggleDropdown(){
    this.isdropdownopen = !this.isdropdownopen;
    console.log("dropdown is working")
  }
}

