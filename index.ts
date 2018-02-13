import * as Ably from 'ably'

class Startup {

  client: Ably.Realtime

  constructor() {
    this.client = new Ably.Realtime('YOUR_API_KEY');
    this.client.connection.on('connected', function() {
      console.log('connected')
    })
  }

  sendMessage():void {
    let channel = this.client.channels.get('test')
    channel.subscribe(function(m){
      console.log("name is ", m.name)
    })
    let message = new Ably.ablyLib.Message();
    message.name = 'ciao';
    channel.publish(message);
    // channel.publish('ciao', '') // <- this works
 }
}

let a = new Startup()
a.sendMessage()
