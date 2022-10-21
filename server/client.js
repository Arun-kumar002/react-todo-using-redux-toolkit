import dgram from 'node:dgram';


const message = 'hi'
const client = dgram.createSocket('udp4');
client.send(message, 5000, 'localhost', (err) => {
  client.close();
});