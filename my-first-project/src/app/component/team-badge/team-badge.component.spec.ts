import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBadgeComponent } from './team-badge.component';

describe('TeamBadgeComponent', () => {
  let component: TeamBadgeComponent;
  let fixture: ComponentFixture<TeamBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
