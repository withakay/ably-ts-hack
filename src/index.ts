import * as Ably from 'ably'

class Startup {

  client: Ably.Realtime;

  constructor() {
    this.client = new Ably.Realtime('AQymZA.8ELEoA:gQFVyi457vFehkyG');
    this.client.connection.on('connected', function() {
      console.log('connected');
    });
  }

  sendMessage():void {
    let channel = this.client.channels.get('test');
    channel.subscribe(function(m){
      console.log("name is ", m.name)
    });
    let message = new Ably.Realtime.Message();
    message.name = 'ciao';
    channel.publish(message)
    // channel.publish('ciao', '') // <- this works
 }
}

const a = new Startup();
a.sendMessage();
