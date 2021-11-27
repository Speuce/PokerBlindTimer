import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelDetailCardComponent } from './level-detail-card.component';

describe('LevelDetailCardComponent', () => {
  let component: LevelDetailCardComponent;
  let fixture: ComponentFixture<LevelDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LevelDetailCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
