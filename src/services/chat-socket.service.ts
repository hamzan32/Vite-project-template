import { Observable } from 'rxjs';
import io, { Socket } from 'socket.io-client';

const EVENTS = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  MESSAGE: 'message',
};

class ChatSocketService {
  private socket!: Socket;
  constructor() {
    this.socket = io(import.meta.env.VITE_APIURL as string, {
      transports: ['websocket', 'polling'],
    });
  }
  listen(eventNames: string) {
    return new Observable((subscribe) => {
      this.socket.on(eventNames, (data: any) => {
        subscribe.next(data);
      });
    });
  }
  emit(eventNames: string, data: object) {
    this.socket.emit(eventNames, data);
  }

  public disconnect = () => this.socket.close();
}
export default new ChatSocketService();
