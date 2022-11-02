<h1 align="center">
<img src="https://raw.githubusercontent.com/React-Avancado/boilerplate/master/public/img/logo-gh.svg" alt="React Avançado"/>
</h1>

## Índice
* <a href="#next-js">NextJS</a>
* <a href="#graph-ql">GraphQL</a>
* <a href="#graph-ql-clients">GraphQL Clients</a>
* <a href="#strapi">Strapi - Headless CMS</a>
* <a href="#css-in-js">CSS-in-JS</a>
* <a href="#getting-started">Getting Started</a>
* <a href="#commands">Commands</a>
* <a href="#learn-more">Learn More</a>
* <a href="#deploy-on-vercel">Deploy on Vercel</a>
___


## <p id="next-js" style="margin: 5rem 0 2rem"><a href="https://nextjs.org/" style="text-decoration: none">NextJS</a><p/>


> Usaremos o Next Js por ser bem extensivo e resolver alguns problemas e facilitar alguns sistemas no React Js.
* permite renderização no servidor (Server Side Rendering)
* permite a geração de estáticos (Static site Generation)
* permite o uso de CSS-in-JS
* zero configuration
* completamente extensível (conseguimos adaptar às nossas necessidades)
* otimizado para produção.
___

<p style="background-color: yellow; color: black; font-size: 11px; text-align: center;font-weight: bold; text-transform: uppercase; padding: 0.5rem 0; margin: 1rem 0">Quais as diferenças entre o Gatsby, Create React App e outros frameworks React?</p>

<table style="font-size: 10px">
  <tr style="text-transform: uppercase; text-align: center" >
    <th style="font-size: 36px; text-align: center">🦗</th>
    <th style="text-align: center">Static Site Generation (SSG)
    </th>
    <th style="text-align: center">Single Page Aplication (SPA)
    </th>
    <th style="text-align: center">Server Side Rendering (SRR)
    </th>
  </tr>
  <tr>
    <td style="font-weight: bold">VANTAGENS</td>
    <td>
      <p>uso quase nulo do servidor</p>  
      <p>pode ser servido em uma CDN (melhor cache)</p>  
      <p>melhor performance</p>  
      <p>flexibilidade para qualquer servidor.</p>  
    </td>
    <td>
      <p>permite páginas ricas em interações sem recarregar</p>
      <p>site mais rápido após o load inicial</p>
      <p>ótimo para aplicações web.</p>
    </td>
    <td>
      <p>ótimo em SEO pois tudo é renderizado no server</p>
      <p>meta tags com previews mais adequados</p>
      <p>melhor performance para o usuário (conteúdo vai ser visto mais rápido)</p>
      <p>código compartilhado com o backend em Node</p>
      <p>menor processamento no lado do usuário.</p>
    </td>
  </tr>
  <tr>
    <td style="font-weight: bold">DESVANTAGENS</td>
    <td>
      <p>tempo de build pode ser muito alto</p>
      <p>dificuldade para escalar aplicações grandes</p>
      <p>dificuldade para realizar atualizações constantes.</p>
    </td>
    <td>
      <p>load inicial pode ser muito grande</p>
      <p>performance imprevisível</p>
      <p>dificulades no SEO.</p>
    </td>
    <td>
      <p>TTFB(time to first byte) maior pois o servidor vai preparar todo o conteúdo para entregar</p>
      <p>HTML maior</p>
      <p>Reload completo nas mudanças de rota.</p>
    </td>
  </tr>
  <tr>
    <td style="font-weight: bold">QUANDO USAR?</td>
    <td>
      <p>sites simples sem muita interação do usuário e poucas páginas</p>
      <p>se há uma unica pessoa que publica conteúdo</p>
      <p>se o conteúdo muda pouco</p>
      <p>quando a performance é extremamente importante</p>
    </td>
    <td>
      <p>quando não há necessidade de indexar infos no Google</p>
      <p>quando há muitas interações sem refresh na page</p>
      <p>quando as informações serão diferentes para cada usuário</p>
    </td>
    <td>
      <p>quando há a necesidade de um SPA com um loading mais rápido</p>
      <p>quando há mudanças constantes do conteúdo</p>
      <p>necessidade de indexação no Google</p>
      <p>numero muito grande de pages</p>
    </td>
  </tr>
  <tr>
    <td style="font-weight: bold">EXEMPLOS</td>
    <td>
      <p>Landing Pages, Blogs, e Portifólios</p>
    </td>
    <td>
      <p>Twitter Web, Facebook Web, Spotify Web</p>
    </td>
    <td>
      <p>E-commerce, Sites de Notícias</p>
    </td>
  </tr>
  <tr>
    <td style="font-weight: bold">FRAMEWORKS</td>
    <td>Gatsby JS, Hexo, Hugo</td>
    <td>Create React App</td>
    <td>Next JS</td>
  </tr>
</table>

  <p style="background-color: magenta; color: white; font-size: 11px; text-align: center;font-weight: bold; text-transform: uppercase; padding: 0.5rem 0; margin: 1rem 0">Para nossa sorte o NEXT JS tem suporte para SSG, SSR e até SPA.</p>

___

## <p id="graph-ql" style="margin: 5rem 0 2rem"><a href="https://graphql.org/" style="text-decoration: none">GraphQL</a><p/>
> Linguagem de consulta de dados desenvolvida e usada pelo Facebook desde 2012. Criado para diminuir o número de requisições e ordenar melhor os dados.

<p style="background-color: yellow; color: black; font-size: 11px; text-align: center;font-weight: bold; text-transform: uppercase; padding: 0.5rem 0; margin: 1rem 0">Antes de usarem o GraphQL, o time do Facebook usava a Rest API. Abaixo listaremos suas diferenças.</p> 

<table style="font-size: 10px">
  <tr style="text-transform: uppercase; text-align: center" >
    <th style="font-size: 24px; text-align: center">🪰</th>
    <th style="text-align: center">Rest API</th>
    <th style="text-align: center">GraphQL</th>
  </tr>
  <tr>
    <td style="font-weight: bold">FUNCIONAMENTO</td>
    <td>
      <p>temos um client e um server</p>
      <p>o usuário faz uma requisição via HTTP Request</p>
      <p>o servidor responde no formato JSON</p>
      <p>a partir dessa resposta o client processa os dados e renderiza para o usuário</p>
      <p>trabalho com diversas rotas</p>
      <p>as chamadas são feitas com rotas diferentes pra cada requisição</p>
    </td>
    <td>
      <p>preparamos um schema com os dados que precisamos</p>
      <p>é possível fazer uma busca de dados (query) por frações de dados</p>
      <p>diferente da Rest API eu recebo só aquilo que preciso</p>
      <p>as requisições usam uma mesma rota com queries diferentes passadas pelo payload</p>
    </td>
  </tr>
  <tr>
    <td style="font-weight: bold">PROBLEMAS</td>
    <td>
      <p>dificuldades para evoluir a API (criação de n versões)</p>
      <p>entrega de dados nem sempre necessários</p>
      <p>aumento no tamanho da requisição</p>
      <p>rotas altamente acopladas</p>
    </td>
    <td align="center"> - </td>
  </tr>
  <tr>
    <td style="font-weight: bold">VANTAGENS</td>
    <td align="center"> - </td>
    <td>
      <p>evolução constante sem problema com diferentes rotas</p>
      <p>entrega somente os dados requisitados (tamanho menor e mais rápido)</p>
      <p>rota única, dados altamente desaclopados</p>
    </td>
  </tr>
<table>

___

## <p id="graph-ql-clients" style="margin: 5rem 0 2rem">GraphQL Clients<p/>

> São responsáveis por criar camadas de abstração para realizar queries e mutations, sistemas de cache, validações e otimizações.

<p style="background-color: yellow; color: black; font-size: 11px; text-align: justify;font-weight: bold; text-transform: uppercase; padding: 1rem; margin: 1rem 0">Todas as vezes que fazemos uma requisição à uma API, utilizamos um fetch ou um axio para receber os dados. No GraphQL temos uma rota única e enviamos um payload com as queries e variávies solicitando esses dados. Bom, com isso precisamos de um modelo pra facilitar esse trabalho. Pra isso temos o GraphQL Clients.</p>

> Dentro do GraphQL Clients temos o Fetch Client e o Caching Client.

<p style="background-color: purple; color: white; font-size: 11px; text-align: center;font-weight: bold; text-transform: uppercase; padding: 0.5rem 0; margin: 1rem 0">Clients mais conhecidos e utilizados:</p>

<table style="font-size: 10px">
  <tr style="text-transform: uppercase; text-align: center" >
    <th style="font-size: 24px; text-align: center">🐁</th>
    <th style="text-align: center">FetchQL</th>
    <th style="text-align: center">GraphQL Request</th>
    <th style="text-align: center">uRQL</th>
    <th style="text-align: center">Relay Modern</th>
    <th style="text-align: center">Apollo Client</th>
  </tr>
  <tr>
    <td style="font-weight: bold">VANTAGENS</td>
    <td>
      <p>Bem leve</p>
      <p>API simplificada</p>
      <p>Escrito com ES2016 e modules</p>
      <p>Isomórfico (Node/Browser)</p>
    </td>
    <td>
      <p>Super simples e leve</p>
      <p>Baseado em Promises(async/await)</p>
      <p>Suporte para Typescript</p>
      <p>Isomórfico (Node/Browser)</p>
    </td>
    <td>
      <p>Bastante leve e focado em performance</p>
      <p>Altamente extensível</p>
      <p>Junto com Exchanges possui caching</p>
      <p>Possui suporte offline</p>
    </td>
    <td>
      <p>Bem consolidada e usada pelo Facebook</p>
      <p>Focada em performance</p>
      <p>Pré-compila as queries do GraphQL em build time (evita que o usuário baixe o parser)</p>
      <p>Possui sistema de chaching/states</p>
    </td>
    <<td>
      <p>Adotada por praticamente todas empresas</p>
      <p>Largamente utilizado pelo mercado, logo mais apoio da comunidade</p>
      <p>Possui os melhores sistemas de chaching/states</p>
      <p>API simplificada e com suporte a hooks</p>
    </td>
  </tr>
  <tr>
    <td style="font-weight: bold">DESVANTAGENS</td>
    <td>
      <p>Não possui sistema de cache</p>
      <p>Não possui tratamento de dados e validações</p>
      <p>Não tem contexto de estado</p>
    </td>
    <td>
      <p>Não possui sistema de cache</p>
      <p>Não possui tratamento de dados e validações</p>
      <p>Não tem contexto de estado</p>
    </td>
    <td>
      <p>Biblioteca nova com pouco material e suporte da comunidade</p>
      <p>Pouca adoção no mercado</p>
    </td>
    <td>
      <p>Necessita de configurações a mais no tooling</p>
      <p>Curva de aprendizado maior devido a mais datelhes para o funcionamento</p>
    </td>
    <td>
      <p>Extremamente grande</p>
      <p>Atualizações constantes com Breaking Changes</p>
      <p></p>
      <p></p>
    </td>
  </tr>

</table>

<i style="font-weight: bold">No curso usaremos o <a href="https://www.apollographql.com/docs/react/" style="text-decoration: none">Appolo Client</a>, por possuir um sistema de caching/states muito bom e bastatne material online.</i>
___

## <p id="strapi" style="margin: 5rem 0 2rem"><a href="https://strapi.io/" style="text-decoration: none">Strapi - Headless CMS</a><p/>

> O Strapi é um headless CMS open-source feito 100% em Javascript, totalmente customizável e orientado para desenvolvedores preocupados em agilidade.

> Um CMS (Content Management System) é um software responsável por gerenciar o conteúdo, ou seja, permitir criação, edição e organização de um determinado conteúdo.

> Um headless CMS não se preocupa em entregar uma aplicação completa com o template. Ao invés disso ele entrega o dado puro através de uma API, cabendo à pessoa desenvolvedora consumir esses dados seja em algum template para mobile, web ou algum sistema embarcado.

<table>
  <tr style="text-transform: uppercase; text-align: center" >
    <th style="font-size: 24px; text-align: center">🐁</th></th>
    <th>Vantagens</th>
  </tr>
  <tr>
    <td>Headless CMS</td>
    <td>
      <p>Mesma entrega para diferentes tipos de dispositivos</p>
      <p>Agnóstico de frameworks (mesma base funciona em React, Vue, Angular, etc)</p>
      <p>Mais fácil na manutenção</p>
      <p>Mais ágil para criação de protótipos</p>
    </td>
  </tr>
  <tr>
    <td>Strapi</td>
    <td>
      <p>100% open-source</p>
      <p>Altamente customizável (API e painel)</p>
      <p>Funciona com Rest API ou GraphQL ao apertar de um botão</p>
      <p>Self Hosted (você controla seus dados e onde colocá-los)</p>
      <p>Roadmap bem definíco e grande investimento</p>
    </td>
  </tr>
</table>

### Features Nativas do Strapi:
* Suporte para multiplos bancos de dados(SQLite, MongoDB, Postgress, MariaDB);
* Documentação automática com plugin de one-click;
* Integração a Webhooks;
* Autenticações e Permissões por padrão;
* Integração com diferentes serviços (Cloudinary, SendGrid, Algolia, Redis);
* Sistema de emails completo;
* Sistema de assets que otimiza imagens e cria em diferentes tamanhos.

### O que podemos fazer com o Strapi:
* Sites estáticos;
* Sites institucionais para empresas;
* Sites de notícias;
* Ecommerce;
* Aplicações mobile, etc.

### Por que usar o Strapi:
* Mais agilidade criando algo próprio;
* COdebase toda em Javascript (mais fácil em manutenção);
* Sem mensalidades e controle próprio de dados (Contentfull, DatoCMS).

### Como funciona? Estrutura de dados do Strapi:
1) Collection Types (conjunto de dados padrão - Ex: usuários, produtos, categorias);
2) Single Types (dado único - Ex: homepage, footer, menu, etc);
3) Component Types (estrutura de dados reutilizadas - Ex: galerias).
___
## <p id="css-in-js" style="margin: 5rem 0 2rem"><a href="https://styled-components.com/" style="text-decoration: none">CSS-in_JS</a><p/>

> Um pouco sobre CSS:
* Falta de escopo local (uma lib de terceiro pode colidir com meu código);
* Especificidade e novamente, colisão de estilos;
* Código não utilizado (dead code);
* Falta de modularidade;
* Grande dificuldade na manutenção com quebra de códigos e páginas.

> Os pré-processadores de CSS como Less, Sass, Stylus e etc vieram ajudar em algumas coisas, mas continuaram com os problemas clássicos além de abrir margem para péssimas práticas.

> O CSS-in-JS é um conjunto de práticas para resolver os complexos problemas do CSS. E existem diferentes bibliotecas que fazem essa prática.
* Aphrodite;
* Emotion;
* Glamor;
* Styled Components;
* Styled JSX.

> Nesse projeto usaremos o <a href="https://styled-components.com/">Styled Components</a>.

### Vatagens:
* Critical CSS automático (recarrega somente aquilo que é renderizado na tela, e depois assincronamente sobre demanda);
* Possui escopo definido (sem colisão de classes);
* Remoção de CSS não utilizado;
* Possui estilos dinâmicos (props, themes);
* Manutenção simplificada e sem dor;
* Vendor prefixing automático;
* Possibilidade de extender estilos englobando uma variável de estilo como em "styled(Button)".

### Como funciona?

`import styled from 'styled-components'`

`export const Main = styled.div`

`aligin-items: center`

`display: flex`
___
## <p id="testes-de-software" style="margin: 5rem 0 2rem"><a href="https://jestjs.io/pt-BR/" style="text-decoration: none">Testes de Software</a><p/>

### Por que realizar testes automatizados em software?

* Código complexo não é simples de debugar de forma orgânica;
* Forma robusta de validar os requisitos de um software;
* Teste funciona como uma primeira documentação (sendo que o teste não substitui uma boa documentação).

### Que tipos de testes existem:

* Testes unitários (o código deve se comportar como o dev espera);
* Testes funcionais (o código deve se comportar como o usuário espera).


### Como fazer um teste unitário?
* Isolamos um componente;
* Testamos unicamente suas features (etapa por etapa);
* Esperamos que os dados sejam processados conforme o funcionamento do método.

### Como fazer um teste de funções?
* Simulamos o usuário clicando, digitando, apagando e clicando;
* Observamos quais os resultados da simulação do usuário;
* Analisamos se o teste está correspondendo às espectativas.

> Como metodologia possuímos o TDD - Test-driven Development (Desenvolvimento Guiado por Testes);
* Escrevemos um teste;
* Fazemos o teste passar;
* Refatoramos.

> Usaremos o <a href="https://jestjs.io/pt-BR/">Jest</a>, o <a href="https://testing-library.com/docs/react-testing-library/intro/">React Testing Library</a> e o <a href="https://www.cypress.io/">Cypress</a>.

___
## <p id="getting-started" style="margin: 5rem 0 2rem">Getting Started<p/>

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
___
## <p id="commands" style="margin: 5rem 0 2rem">Commands<p/>
- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `storybook`: runs storybook on `localhost:6006`
- `build-storybook`: create the build version of storybook
___
## <p id="learn-more" style="margin: 5rem 0 2rem">Learn More<p/>

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
___
## <p id="deploy-on-vercel" style="margin: 5rem 0 2rem">Deploy on Vercel<p/>

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
___