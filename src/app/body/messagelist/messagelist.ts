
import { Message } from "../message";
export class Messagelist {
  messageSumList: Array<Message>;
  currentMessage: Message;

  constructor(messageSumList,currentMessage){
    this.messageSumList = messageSumList;
    this.currentMessage = currentMessage;
  }


  // get currentMsg():Message {
  //    return this.currentMessage;
  //  }
  //
  // set currentMsg(value: Message){
  //   this.currentMessage = value;
  // }
}