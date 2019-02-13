module.exports = api => {
  api.render('./template');
  api.injectImports(api.entryFile, `import { Helmet, HelmetProvider } from '@jnields/vue-helmet'`);
  api.injectImports(api.entryFile, `Vue.component('Helmet', Helmet)`);
  api.injectImports(api.entryFile, `Vue.component('HelmetProvider', HelmetProvider)`);
};