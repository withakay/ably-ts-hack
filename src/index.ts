import { ClientOptions, Realtime, Rest } from 'ably'

class App {

    realtimeClient: Realtime;
    restClient: Rest;

    constructor() {
        // Create an empty object of the ClientOptions interface
        const realtimeOpts: ClientOptions = <ClientOptions>{};
        realtimeOpts.key = 'AQymZA.8ELEoA:gQFVyi457vFehkyG';
        realtimeOpts.echoMessages = true;
        this.realtimeClient = new Realtime(realtimeOpts);
        this.realtimeClient.connection.on('connected', () => console.log('connected'));

        const restOpts: ClientOptions = <ClientOptions>{};
        restOpts.key = 'AQymZA.8ELEoA:gQFVyi457vFehkyG';
        restOpts.echoMessages = true;
        this.restClient = new Rest(restOpts)

    }

    send(): void {
        const ch1 = this.realtimeClient.channels.get('test');
        ch1.subscribe(m => console.log("message from", m.name));
        const msg1 = new Realtime.Message();
        msg1.name = 'realtime';
        ch1.publish(msg1);

        // this 'feels' wrong, but Rest has no message.
        const msg2 = new Realtime.Message();
        msg2.name = 'rest';
        this.restClient.channels.get('test').publish(msg2);
    }
}

const app = new App();
app.send();
