'use strict';

const fractal = module.exports = require('@frctl/fractal').create();
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

// Pass a global variable so that Nunjucks templates have access to "env"
fractal.components.set('default.context', {
  env: isDev ? 'dev' : 'prod'
});

fractal.set('project.title', 'Vue + Fractal + Vite');

fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('default.preview', '@preview');

fractal.components.engine('@frctl/nunjucks');  
fractal.components.set("ext", ".njk");

fractal.docs.set('path', path.join(__dirname, 'docs'));

fractal.web.set('static.path', path.join(__dirname, 'public'));
fractal.web.set('builder.dest', __dirname + '/build');
fractal.web.set('server.sync', true);
fractal.web.set('server.port', 4000);

// --- This starts the Fractal server when the file is run ---
const logger = fractal.cli.console;

fractal.web.server().on('error', err => logger.error(err.message));
fractal.web.server().start().then(server => {
  logger.success(`Fractal server is now running at ${server.url}`);
});
