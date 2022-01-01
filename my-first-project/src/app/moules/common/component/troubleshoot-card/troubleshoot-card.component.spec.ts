import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleshootCardComponent } from './troubleshoot-card.component';

describe('TroubleshootCardComponent', () => {
  let component: TroubleshootCardComponent;
  let fixture: ComponentFixture<TroubleshootCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroubleshootCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleshootCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
