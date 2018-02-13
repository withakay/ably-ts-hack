"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ably = require("ably");
class Startup {
    constructor() {
        this.client = new Ably.Realtime('AQymZA.8ELEoA:gQFVyi457vFehkyG');
        this.client.connection.on('connected', function () {
            console.log('connected');
        });
    }
    sendMessage() {
        let channel = this.client.channels.get('test');
        channel.subscribe(function (m) {
            console.log("name is ", m.name);
        });
        let message = new Ably.Realtime.Message();
        message.name = 'ciao';
        channel.publish(message);
        // channel.publish('ciao', '') // <- this works
    }
}
const a = new Startup();
a.sendMessage();
//# sourceMappingURL=index.js.map