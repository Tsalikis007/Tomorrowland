import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Logo {
  image: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  imports: [CommonModule] // Adicione esta linha
})
export class LandingComponent {
  logo: Logo[] = [
    { image: 'https://wallpaperaccess.com/full/677166.png' },
  ];
  
  artists = [
    {
      name: 'Avicii',
      description: 'Um dos DJs mais influentes do EDM, conhecido por suas melodias cativantes.',
      image: 'https://i.imgur.com/wVQH5msb.jpg'
    },
    {
      name: 'Steve Aoki',
      description: 'Um dos DJs mais energéticos do mundo, famoso por suas festas e remixagens.',
      image: 'https://i.imgur.com/wNVXEoE.jpeg'
    },
    {
      name: 'Alesso',
      description: 'DJ e produtor sueco, conhecido por suas colaborações e hits de sucesso.',
      image: 'https://i.imgur.com/YaPh5en.jpeg'
    }
  ];
}