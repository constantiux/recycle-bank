/*
/**
 * This is the main Node.js server script for your project
 * Check out the two endpoints this back-end API provides in fastify.get and fastify.post below
 */

// Require the fastify framework and instantiate it
const fastify = require("fastify")({
    // Set this to true for detailed logging:
    logger: false,
  });
  
  
  // src/server.js
  
  const fastifyHttpProxy = require('@fastify/http-proxy');
  
  /**
   * Create a Fastify server instance with logging enabled.
   * Fastify uses the library `pino` for logging.
   *
   * @see https://www.fastify.io/docs/latest/Logging/
   * @see https://github.com/pinojs/pino/
   */
  
  const CONFIG = {
      apiKey: process.env.API_KEY,
  };
  
  /**
   * Register and configure the `fastify-http-proxy` plugin.
   *
   * This plugin supports all the options of `fastify-reply-from`,
   * as well as a few additional options e.g. `upstream`.
   *
   * @see https://github.com/fastify/fastify-http-proxy#options
   * @see https://github.com/fastify/fastify-reply-from
   */
  fastify.register(fastifyHttpProxy, {
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
  
  // Run the server and report out to the logs
  fastify.listen(
    { port: 3001, host: "0.0.0.0" },
    function (err, address) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Your app is listening on ${address}`);
    }
  );