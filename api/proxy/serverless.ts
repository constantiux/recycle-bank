// https://www.fastify.io/docs/latest/Guides/Serverless/

import { processExpression } from "@vue/compiler-core";
import * as dotenv from "dotenv";
dotenv.config();

import Crypto from 'crypto';

import Fastify from "fastify";

const CONFIG = {
  apiKey: process.env.VITE_X_API_KEY
};

function genHash(timestamp) {
  const raw = CONFIG.apiKey + timestamp;
  const hash = Crypto.createHash('sha256')
                   // updating data
                   .update(raw)
                   // Encoding to be used
                   .digest('hex');
  return hash
}

const app = Fastify({
  logger: true,
});

app.addHook('onRequest', (request, reply, done) => {
  const hashed = genHash(request.headers['x-api-proxy-timestamp'])
  if (!(request.headers['x-api-proxy-validated'] === hashed)){
    reply.statusCode = 403;
    reply.send({ forbidden: true })
  }
  done()
})

app.register(import("../src"));

app.register(require('@fastify/http-proxy'), {
  prefix: '/api',
  upstream: "https://iamshk.glitch.me",
  undici: true,
  /**
   * Reply options to be passed through to `fastify-reply-from`,
   * which `fastify-http-proxy` uses under the hood.
   *
   * @see https://github.com/fastify/fastify-http-proxy#replyoptions
   */
  replyOptions: {
      /**
       * @see https://github.com/fastify/fastify-reply-from#rewriterequestheadersoriginalreq-headers
       */
      rewriteRequestHeaders: (originalRequest, headers) => {
          return {
              /**
               * Preserve the existing request headers.
               */
              ...headers,
              /**
               * Add the header which the API we're proxying requests
               * to requires to authenticate the request.
               */
              'X-Api-Secret-Key': CONFIG.apiKey,
          };
      },
  },
});

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};