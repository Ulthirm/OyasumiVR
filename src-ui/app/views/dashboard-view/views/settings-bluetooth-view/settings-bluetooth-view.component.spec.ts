import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsBluetoothViewComponent } from './settings-bluetooth-view.component';

describe('SettingsBluetoothViewComponent', () => {
  let component: SettingsBluetoothViewComponent;
  let fixture: ComponentFixture<SettingsBluetoothViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsBluetoothViewComponent]
    });
    fixture = TestBed.createComponent(SettingsBluetoothViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
