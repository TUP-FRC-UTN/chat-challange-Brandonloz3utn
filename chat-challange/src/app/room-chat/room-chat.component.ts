import { Component } from '@angular/core';
import { MessageComponent } from "../message/message.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-chat',
  standalone: true,
  imports: [MessageComponent,CommonModule],
  templateUrl: './room-chat.component.html',
  styleUrl: './room-chat.component.css'
})
export class RoomChatComponent {
  messages: {user: string, text: string}[] = [];

  
  newMessage(message: {user: string, text: string}) {
    this.messages.push(message);
  }
}
