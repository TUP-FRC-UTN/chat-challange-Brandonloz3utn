import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() user: string = '';
  @Output() sendMessage = new EventEmitter<{user: string, text:string}>();

  newMessage: string = '';

  enviarMessage(){
    if(this.newMessage.trim()){
      this.sendMessage.emit({user: this.user, text: this.newMessage});
      this.newMessage = '';
    }
  }
}
