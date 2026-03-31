import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlindspotService } from './services/blindspot';
import { Character } from './interfaces/Character.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy{
  Character: Character;
  episodes: any[] = [];      // El "baúl" con todos los datos de la API
  filteredEpisodes: any[] = []; // Lo que realmente se muestra
  seasons: number[] = [];
  cast: Character[] = [];
  private subscription: Subscription;
  menuOpen = false;
  pp='';
  ComponenteMostrar = 'H';

  constructor(private Blindspot: BlindspotService) {}
  
  ngOnInit(): void {
    this.subscription = this.Blindspot
      .getCharacterById(1855)
      .subscribe({
        next: (data) => {
          this.Character = data;
        console.log('caracteres:', this.Character);

        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {},
      });

    
    this.Blindspot.geters(1855, 'episodes').subscribe({
      next: (data) => {
        this.episodes = data;
        this.filteredEpisodes = data; // Al cargar, mostramos todos
        
        // EXTRAER VALORES: Sacamos los números de temporada sin repetir
        this.seasons = [...new Set(data.map((ep: any) => ep.season))].sort((a: any, b: any) => a - b);
      },
      error: (error) => console.log(error)
    });

    this.Blindspot.geters(1855, 'cast').subscribe({
      next: (data) => {
        this.cast = data;
        console.log('Reparto:', this.cast);
      },
      error: (error) => {
        console.log('Error al obtener reparto:', error);
      }
    });
  }
  aplicarFiltro(valorTemporada: string) {
    if (valorTemporada === 'all') {
      this.filteredEpisodes = this.episodes;
    } else {
      const num = parseInt(valorTemporada);
      this.filteredEpisodes = this.episodes.filter(ep => ep.season === num);
    }
  }
  ruta(c:string){
    this.pp = c;
  }
  Mostrar(c:string){
    this.ComponenteMostrar = c;
  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
      console.log("Cierre");
  }
}
