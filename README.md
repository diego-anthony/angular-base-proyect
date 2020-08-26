# {{REPLACE_TITLE}} #

{{REPLACE_DESCRIPTION}}

### Información Adicional ###
* Deshabilitar advertencia de crypto.js
node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js
// old:
node: false,
// new:
node: { crypto: true, stream: true },
