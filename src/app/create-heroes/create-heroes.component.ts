import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-create-heroes',
  templateUrl: './create-heroes.component.html',
  styleUrl: './create-heroes.component.css'
})
export class CreateHeroesComponent {
  constructor(
    private heroService: HeroService,
    ) {
  }
  
  @Input() hero?: Hero;
  NewHeroName: string = '';

  createHero(): void {
    if (this.NewHeroName.trim()) {
      this.heroService.createHero(this.NewHeroName.trim())
        .subscribe(newHero => {
          console.log('Hero created:', newHero);
          this.NewHeroName = '';
        });
    }
  }
}
