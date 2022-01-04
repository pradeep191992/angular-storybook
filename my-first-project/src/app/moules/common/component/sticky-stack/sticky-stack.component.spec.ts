import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyStackComponent } from './sticky-stack.component';

describe('StickyStackComponent', () => {
  let component: StickyStackComponent;
  let fixture: ComponentFixture<StickyStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
