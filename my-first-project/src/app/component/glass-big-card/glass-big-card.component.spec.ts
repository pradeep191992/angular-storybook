import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassBigCardComponent } from './glass-big-card.component';

describe('GlassBigCardComponent', () => {
  let component: GlassBigCardComponent;
  let fixture: ComponentFixture<GlassBigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassBigCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
