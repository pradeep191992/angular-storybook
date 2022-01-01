import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassSmallCardComponent } from './glass-small-card.component';

describe('GlassSmallCardComponent', () => {
  let component: GlassSmallCardComponent;
  let fixture: ComponentFixture<GlassSmallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassSmallCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassSmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
