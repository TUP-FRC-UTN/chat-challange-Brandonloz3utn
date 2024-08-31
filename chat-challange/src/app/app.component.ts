import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomChatComponent } from "./room-chat/room-chat.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat-challange';
}
