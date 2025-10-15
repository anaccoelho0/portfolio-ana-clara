// src/shim.d.ts

// Declara o módulo para o arquivo de rotas JavaScript.
// Isso diz ao TypeScript que tudo que for importado deste caminho
// deve ter o tipo 'any' e, portanto, o erro TS7016 será ignorado.
declare module './routes/index.js' {
  const routes: any;
  export default routes;
}