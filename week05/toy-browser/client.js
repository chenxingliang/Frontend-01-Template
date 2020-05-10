const net = require('net');

class Request {

}

class Response {
    // methods, url = host + port + path
    // body: k/v
    // headers
    constructor(options) {
        this.method = option.method || 'GET';
        this.host = options.host;
        this.port = options.port || 80;
        this.path = options.path || '/';
        this.body = options.body || {};
        this.headers = options.headers || {};

        if (!this.headers['Content-Type']) {
            this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }

        if (this.headers['Content-Type'] === 'application/json') {
            this.bodyText = JSON.stringify(this.body);
        } else if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&');
        }

        this.headers['Content-Length'] = this.bodyText.length;
    }

    toString() {
        return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this,this.headers[key]}`).join('&')}\r
\r
`
    }

    open(method, url) {

    }

    send(connection) {
        return new Promise((resolve, reject) => {
            if (connection) {
                connection.write(this.toString());
            } else {
                connection = net.createConnection({
                    host: this.host,
                    port: this.port
                }, () => {
                    connection.write(this.toString());
                });
            }
            client.on('data', (data) => {
                reslove(data.toString());
                connection.end();
            });
            client.on('error', (data) => {
                reject(data.toString());
                connection.end();
            });
        });
    }
}

void async function () {

}();

const client = net.createConnection({
    host: '127.0.0.1',
    port: 8088 
}, () => {
    // 'connect' listener.
    console.log('connected to server!');
    let request = new Request({
        method: 'GET',
        host: '128.0.0.1',
        port: '8088',
        path: '/',
        headers: {
            ['X-Foo2']: 'customs'
        },
        body: {
            name: 'cxl'
        }
    });

    console.log(request.toString());
});
client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});
client.on('end', () => {
    console.log('disconnected from server');
});