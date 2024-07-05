import { Component } from '@angular/core';
import { invoke } from '@tauri-apps/api/tauri';

@Component({
  selector: 'app-settings-bluetooth-view',
  templateUrl: './settings-bluetooth-view.component.html',
  styleUrls: ['./settings-bluetooth-view.component.scss']
})
export class SettingsBluetoothViewComponent {
  status = 'Disconnected';

  connectBluetooth() {
    invoke('connect_bluetooth')
      .then((response) => {
        console.log(response);
        this.status = 'Connected';
      })
      .catch((error) => {
        console.error(error);
      });
  }

  disconnectBluetooth() {
    invoke('disconnect_bluetooth')
      .then((response) => {
        console.log(response);
        this.status = 'Disconnected';
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getBluetoothStatus() {
    invoke('get_bluetooth_status')
      .then((status) => {
        console.log(status);
        this.status = status as string;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
