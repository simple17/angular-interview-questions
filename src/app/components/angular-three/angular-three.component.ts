import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-three',
  templateUrl: './angular-three.component.html',
  styleUrls: ['./angular-three.component.scss'],
})
export class AngularThreeComponent {
  newNotification: string = '';

  notifications: string[] = [
    'test notification 1',
    'test notification 2',
    'test notification 3',
  ];

  sendNotification = () => {
    if (this.newNotification) {
      this.notifications.push(this.newNotification);
    }
  };

  removeNotification = () => {
    //
  };
}
