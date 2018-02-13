"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ably = require("ably");
class Startup {
    constructor() {
        this.client = new Ably.Realtime('YOUR_API_KEY');
        this.client.connection.on('connected', function () {
            console.log('connected');
        });
    }
    sendMessage() {
        let channel = this.client.channels.get('test');
        channel.subscribe(function (m) {
            console.log("name is ", m.name);
        });
        let message = new Ably.ablyLib.Message();
        message.name = 'ciao';
        channel.publish(message);
        // channel.publish('ciao', '') // <- this works
    }
}
let a = new Startup();
a.sendMessage();
