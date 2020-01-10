# Dog App

Aplicação web simples que busca todas as raças de cachorros numa API pública.

O usuário pode digitar o nome do cachorro, estilizar a fonte e a cor e essas informações são armazenadas no local storage.

App construído com o framework Vue.js.

* Documentação Dog API: [Dog API](https://dog.ceo/dog-api/).
* Documentação do VUE: [Vue.js](https://br.vuejs.org/v2/guide/index.html).

 ### A tela principal (Início) exibe

* Select com as raças;
* Input para usuário inserir o nome do cachorro;
* Select para selecionar a cor da fonte;
* Select com as opções de fonte (Google Fonts);
* Imagem do cachorro selecionado com o texto por cima com a fonte e cor selecionada;
* Botão salvar para armazenar em local storage as informações selecionadas pelo usuário + Data e Horário.
* Uma mensagem de sucesso quando um item é salvo.

### A tela secundária (Galeria) contém

* Todos itens salvos pelo usuário

## 1. Pré-requisitos para execução do projeto

- [NPM](https://www.npmjs.com/get-npm)

## 2. Baixar dependências

Dentro do diretório raiz execute o comando:

```
npm install
```

## 3. Inicializar servidor de desenvolvimento para testes

Dentro do diretório raiz execute o comando:
```
npm run serve
```
A aplicação executará na porta 8080.

## 4. Compilar versão para produção

Dentro do diretório raiz execute o comando:
```
npm run build
```
