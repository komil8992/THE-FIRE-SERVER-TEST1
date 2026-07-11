const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

console.log("? Server Started on port 8080");

wss.on("connection", (ws) => {
    console.log("");

    ws.on("message", (data) => {
        const message = data.toString();

        console.log("??", message);

        // ارسال پيام براي همه کاربران
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on("close", () => {
        console.log("");
    });
});
