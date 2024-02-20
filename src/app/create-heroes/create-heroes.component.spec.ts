import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHeroesComponent } from './create-heroes.component';

describe('CreateHeroesComponent', () => {
  let component: CreateHeroesComponent;
  let fixture: ComponentFixture<CreateHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateHeroesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
