import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglePauseComponent } from './toggle-pause.component';

describe('TogglePauseComponent', () => {
  let component: TogglePauseComponent;
  let fixture: ComponentFixture<TogglePauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglePauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglePauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
