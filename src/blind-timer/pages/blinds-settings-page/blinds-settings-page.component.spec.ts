import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindsSettingsPageComponent } from './blinds-settings-page.component';

describe('BlindsSettingsPageComponent', () => {
  let component: BlindsSettingsPageComponent;
  let fixture: ComponentFixture<BlindsSettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlindsSettingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlindsSettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
