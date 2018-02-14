"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ably_1 = require("ably");
class App {
    constructor() {
        // Create an empty object of the ClientOptions interface
        const realtimeOpts = {};
        realtimeOpts.key = 'AQymZA.8ELEoA:gQFVyi457vFehkyG';
        realtimeOpts.echoMessages = true;
        this.realtimeClient = new ably_1.Realtime(realtimeOpts);
        this.realtimeClient.connection.on('connected', () => console.log('connected'));
        const restOpts = {};
        restOpts.key = 'AQymZA.8ELEoA:gQFVyi457vFehkyG';
        restOpts.echoMessages = true;
        this.restClient = new ably_1.Rest(restOpts);
    }
    send() {
        const ch1 = this.realtimeClient.channels.get('test');
        ch1.subscribe(m => console.log("message from", m.name));
        const msg1 = new ably_1.Realtime.Message();
        msg1.name = 'realtime';
        ch1.publish(msg1);
        const msg2 = new ably_1.Realtime.Message();
        msg2.name = 'rest';
        this.restClient.channels.get('test').publish(msg2);
    }
}
const app = new App();
app.send();
//# sourceMappingURL=index.js.map