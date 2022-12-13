// https://www.fastify.io/docs/latest/Guides/Serverless/

import * as dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";

const CONFIG = {
  apiKey: process.env.API_KEY,
};

const app = Fastify({
  logger: true,
});

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
              'X-Api-Key': CONFIG.apiKey,
          };
      },
  },
});

export default async (req, res) => {
  await app.ready();
  app.server.emit("request", req, res);
};