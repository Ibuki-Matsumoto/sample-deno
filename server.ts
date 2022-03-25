import { serve } from "https://deno.land/std@0.89.0/http/server.ts";

const port = 8010;
const server = serve({
    port: port
});

for await (const req of server) {
    req.respond({
        body: "Hello Deno"
    })
}