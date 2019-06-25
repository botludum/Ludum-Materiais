<p align="center"> <img src="https://raw.githubusercontent.com/botludum/Ludum-Duvida/development/imagens/Ludum_LogoFinal(sem_fundo).png" width="auto" height="400" /> 
<br>    
<a href="https://www.gnu.org/licenses/gpl-3.0.pt-br.html"><img src="https://img.shields.io/badge/licence-GPL3-green.svg"/></a> <a href="CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg"></a>
<a href="https://gitlab.com/guilhermesiqueira/Ludum-Materiais/commits/master"><img alt="pipeline status" src="https://gitlab.com/guilhermesiqueira/Ludum-Materiais/badges/development/pipeline.svg" /></a><a href="https://gitlab.com/guilhermesiqueira/Ludum-Materiais/commits/master"><img alt="coverage report" src="https://gitlab.com/guilhermesiqueira/Ludum-Materiais/badges/development/coverage.svg" /></a>
<a href="https://codeclimate.com/github/botludum/Ludum-Materiais/maintainability"><img src="https://api.codeclimate.com/v1/badges/f7a6f2eb85a911c62b1b/maintainability" /></a>
<br><br> <b><a href="https://t.me/OLudumBot">Clique aqui para conversar comigo no Telegram!</a></b> 
<br> Se não conseguir me encontre pelo meu username é <b>@OLudumBot</b>
<br> Ah! Eu também possuo uma versão de homologação é <a href="https://t.me/ludumdev_bot">@ludumdev_bot</a></b>    

# Ludum - O assistente virtual sobre o PyGame

## Sobre o repositório
<p align="justify"> Encarregado de armazenar o Microsserviço de Materiais do Ludum. 
Este microsserviço se comunica com o Ludum e o Webclient e trata de todos os aspectos relacionados aos materiais do Ludum.</p>

## Sobre o projeto
<p align="justify">O Ludum é um chatbot que propõe-se a auxiliar em diversos aspectos as pessoas que desejam desenvolver jogos utilizando a biblioteca PyGame.</p>

## Como desenvolver
<p align="justify">Neste microsserviço foi utilizado NodeJS com express e MongoDB (Mongoose). Tudo que é necessário para o desenvolvimento está dentro do docker, então, para desenvolver, deve-se seguir os seguintes passos: </p>

1. Modifique a linha 24 do arquivo index.js localizado na pasta raíz do projeto de:
```javascript
mongoose.connect(process.env.MONGODB_URI);
```
para:
```javascript
mongoose.connect('mongodb://localhost/ludum-duvida');
```

2. Após, abra um terminal na pasta raíz do projeto e execute o comando:
```bash
docker build -t guilhermesiqueira/ludum-materiais .
```

3. Em seguida:
```bash
docker-compose up
```
Pronto, o seu ambiente de desenvolvimento está pronto!

## Quero saber mais!
<p align="justify">Para mais informações e maiores esclarecimentos, visite o nosso repositório principal, 
clicando <a href="https://github.com/fga-eps-mds/2019.1-Ludum">aqui</a></p>

## Documentação da API

## Base URL
A URL para qualquer requisição possui a url base **api**: `https://ludum-materiais.herokuapp.com/api/{resource}`
## Endpoints
Os endpoints são:

### `/links`
São os endpoints relacionados aos links pesquisados.

#### `GET /links`
Retorna todas os links pesquisados.

- Exemplo de JSON retornado:
```json
{
    "status":"success",
    "message":"Links recuperados com sucesso!",
    "data": [
        {
            "_id":"5cec9b7a52788600243b3738",
            "title":"Página oficial da Pygame",
            "type":"Site",
            "link":"https://www.pygame.org/news",
            "status":null,
            "create_date":"2019-05-28T02:22:50.483Z",
            "__v":0
        }, 
        {
            "_id":"5ced56a12fae920024d95831",
            "title":"Criando um Snake do zero com Pygame em 5 minutos (ou mais)",
            "type":"Vídeo",
            "link":"https://www.youtube.com/watch?v=H4TXHI9BRCQ",
            "status":null,
            "create_date":"2019-05-28T15:41:21.916Z",
            "__v":0
        }
    ]
}
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.

#### `GET /links/:{id}`
Retorna apenas um link.

| Parametro             | Tipo    | Descricao                                            | Obrigatorio? |
| --------------------- | ------- | ---------------------------------------------------- | ------------ |
| id                    | string  | id do link  | sim          |

- Exemplo de JSON retornado:

```json
{
    "message":"Carregando detalhes da dúvida",
    "data": {
        "_id":"5cec9b7a52788600243b3738",
        "title":"Página oficial da Pygame",
        "type":"Site",
        "link":"https://www.pygame.org/news",
        "status":null,
        "create_date":"2019-05-28T02:22:50.483Z","__v":0
    }
}
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.

#### `GET /links/aprovados/:{status}`
Retorna todos os links aprovados ou não.

| Parametro             | Tipo    | Descricao                                            | Obrigatorio? |
| --------------------- | ------- | ---------------------------------------------------- | ------------ |
| status                | string('S' ou 'N')  | 'S' para links aprovados e 'N' para links recusados  | sim          |

- Exemplo de JSON retornado:

```json
{
    "status":"success",
    "message":"Links pendentes recuperados com sucesso!",
    "data": [
        {
            "_id":"5d0bc36f0e6e1d0024d4767d",
            "title":"Página oficial da Pygame",
            "type":"Site",
            "link":"https://www.pygame.org/news",
            "status":"S",
            "create_date":"2019-06-23T04:13:21.513Z"
        },
        {
            "_id":"5d0bc36f0e6e1d0024d4767e",
            "title":"Criando um Snake do zero com Pygame em 5 minutos (ou mais)",
            "type":"Vídeo",
            "link":"https://www.youtube.com/watch?v=H4TXHI9BRCQ",
            "status":"S",
            "create_date":"2019-06-23T04:13:21.513Z"
        }
    ]
}
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.

#### ``` GET /links/pendentes ```
Retorna todos os links pendentes de aprovação.

- Exemplo de JSON retornado:
```json
{
    "status":"success",
    "message":"Links pendentes recuperados com sucesso!",
    "data": [
        {
            "_id":"5d0bc36f0e6e1d0024d4767d",
            "title":"Página oficial da Pygame",
            "type":"Site",
            "link":"https://www.pygame.org/news",
            "status":null,
            "create_date":"2019-06-23T04:13:21.513Z"
        },
        {
            "_id":"5d0bc36f0e6e1d0024d4767e",
            "title":"Criando um Snake do zero com Pygame em 5 minutos (ou mais)",
            "type":"Vídeo",
            "link":"https://www.youtube.com/watch?v=H4TXHI9BRCQ",
            "status":null,
            "create_date":"2019-06-23T04:13:21.513Z"
        }
    ]
}
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.

#### ``` POST /links/cadastrar ```
Cadastra um novo link

| Body             | Tipo    | Descricao                       | Obrigatorio? |
| ---------------- | ------- | ------------------------------- | ------------ |
| title            | string  | Título do link                  | sim          |
| type             | string  | Tipo do link                    | sim          |
| link             | string  | Link                            | sim          |

- Exemplo de JSON retornado:
```json
{
    "message": "Material adicionado!",
    "data": {
        "_id": "5d0f03691110220024601688",
        "title": "Criando um Snake do zero com Pygame em 5 minutos (ou mais)",
        "type": "Vídeo",
        "link": "https://www.youtube.com/watch?v=H4TXHI9BRCZ",
        "status": null,
        "create_date": "2019-06-23T04:43:21.504Z",
        "__v": 0
    }
}
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.


#### ``` PUT /links/:{id}/:{aprovacao} ```
Aprova um determinado link

| Parametro             | Tipo    | Descricao                                            | Obrigatorio? |
| --------------------- | ------- | ---------------------------------------------------- | ------------ |
| id                    | string  | id do link  | sim          |
| aprovação             | string ('S' ou 'N') | 'S' para aprovar um link e 'N' para recusar | sim |

- Exemplo de JSON retornado:
```json
{
    "message": "Link modificado!",
    "data": {
        "_id": "5d0f03691110220024601688",
        "title": "Criando um Snake do zero com Pygame em 5 minutos (ou mais)",
        "type": "Vídeo",
        "link": "https://www.youtube.com/watch?v=H4TXHI9BRCZ",
        "status": "S",
        "create_date": "2019-06-23T04:43:21.504Z",
        "__v": 0
    }
}
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.

#### ``` PUT /linkEditar/:id ```
Edita um link cadastrado

| Parametro             | Tipo    | Descricao                                            | Obrigatorio? |
| --------------------- | ------- | ---------------------------------------------------- | ------------ |
| id                    | string  | id do link  | sim          |  

| Body             | Tipo    | Descricao                       | Obrigatorio? |
| ---------------- | ------- | ------------------------------- | ------------ |
| title            | string  | Título do link                  | sim          |
| type             | string  | Tipo do link                    | sim          |
| link             | string  | Link                            | sim          |

- Exemplo de JSON retornado:
```json
{
    "message": "Link modificado!",
    "data": {
        "_id": "5d0f03691110220024601688",
        "title": "Criando um Snake do zero com Pygame em 10 minutos (ou mais)",
        "type": "Vídeo",
        "link": "https://www.youtube.com/watch?v=H4TXHI9BRCZ",
        "status": null,
        "create_date": "2019-06-23T04:43:21.504Z",
        "__v": 0
    }
}
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.

### `/tutoriais`
São os endpoints relacionados aos tutoriais pesquisados.

#### `GET /tutoriais`
Retorna todas os tutoriais pesquisados.

- Exemplo de JSON retornado:
```json
{
    "status": "success",
    "message": "Tutoriais recuperados com sucesso!",
    "data": [
        {
            "_id": "5cef1fa2bd3303002420035c",
            "title": "Nome do tutorial",
            "description": "Passo 1... Passo 2...",
            "status": null,
            "create_date": "2019-05-30T00:11:14.546Z",
            "__v": 0
        },
        {
            "_id": "5cef2b56ea278c002446b0af",
            "title": "Nome do tutorial 2",
            "description": "Passo 1... Passo 2...",
            "status": null,
            "create_date": "2019-05-30T01:01:10.489Z",
            "__v": 0
        }
    ]
}
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.


#### `GET /tutoriais/aprovados/:{status}`
Retorna todos os tutoriais aprovados ou não.

| Parametro             | Tipo    | Descricao                                            | Obrigatorio? |
| --------------------- | ------- | ---------------------------------------------------- | ------------ |
| status               | string('S' ou 'N')  | 'S' para tutoriais aprovados e 'N' para tutoriais recusados  | sim          |

- Exemplo de JSON retornado:
``` json
{
    "status": "success",
    "message": "Tutoriais pendentes recuperados com sucesso!",
    "data": [
    ]
}
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.


#### ``` GET /tutoriais/pendentes ```
Retorna todos os tutoriais pendentes de aprovação.

- Exemplo de JSON retornado:
```json
{
    "status": "success",
    "message": "Tutoriais pendentes recuperados com sucesso!",
    "data": [
        {
            "_id": "5cef1fa2bd3303002420035c",
            "title": "Nome do tutorial",
            "description": "Passo 1 Passo 2",
            "status": null,
            "create_date": "2019-05-30T00:11:14.546Z",
            "__v": 0
        },
        {
            "_id": "5cef2b56ea278c002446b0af",
            "title": "Nome do tutorial 2",
            "description": "Passo 1 Passo 2",
            "status": null,
            "create_date": "2019-05-30T01:01:10.489Z",
            "__v": 0
        }
    ]
 }
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.

#### `GET /tutorial/:{id}`
Retorna apenas um tutorial.

| Parametro             | Tipo    | Descricao                                            | Obrigatorio? |
| --------------------- | ------- | ---------------------------------------------------- | ------------ |
| id                    | string  | id do tutorial  | sim          |

- Exemplo de JSON retornado:

```json
{
    "message": "Carregando detalhes da dúvida",
    "data": {
        "_id": "5cef1fa2bd3303002420035c",
        "title": "Nome do tutorial",
        "description": "Passo 1... Passo 2...",
        "status": null,
        "create_date": "2019-05-30T00:11:14.546Z",
        "__v": 0
    }
}
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.

#### ``` POST /tutoriais/cadastrar ```
Cadastra um novo tutorial

| Body             | Tipo    | Descricao                       | Obrigatorio? |
| ---------------- | ------- | ------------------------------- | ------------ |
| title            | string  | Título do tutorial              | sim          |
| description      | string  | Descrição do tutorial           | sim          |

- Exemplo de JSON retornado:
```json
{
    "message": "Tutorial adicionado!",
    "data": {
        "_id": "5d0f0cd9111022002460168a",
        "title": "Criando um Snake do zero com Pygame em 10 minutos (ou mais)",
        "description": "Descrevendo tutorial",
        "status": null,
        "create_date": "2019-06-23T05:23:37.571Z",
        "__v": 0
    }
}
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.

#### ``` PUT /tutoriais/:{id}/:{aprovacao} ```
Aprova um determinado tutorial

| Parametro             | Tipo    | Descricao                                            | Obrigatorio? |
| --------------------- | ------- | ---------------------------------------------------- | ------------ |
| id                    | string  | id do tutorial  | sim          |
| aprovação             | string ('S' ou 'N') | 'S' para aprovar um tutorial e 'N' para recusar | sim |

- Exemplo de JSON retornado:
```json
{
    "message": "Tutorial modificado!",
    "data": {
        "_id": "5d0f0cd9111022002460168a",
        "title": "Criando um Snake do zero com Pygame em 10 minutos (ou mais)",
        "description": "Descrevendo tutorial",
        "status": "S",
        "create_date": "2019-06-23T05:23:37.571Z",
        "__v": 0
    }
}
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.

#### ``` PUT /tutorialEditar/:id ```
Edita um link cadastrado

| Parametro             | Tipo    | Descricao                                            | Obrigatorio? |
| --------------------- | ------- | ---------------------------------------------------- | ------------ |
| id                    | string  | id do tutorial  | sim          |  

| Body             | Tipo    | Descricao                       | Obrigatorio? |
| ---------------- | ------- | ------------------------------- | ------------ |
| title            | string  | Título do tutorial              | sim          |
| description      | string  | Descrição do tutorial           | sim          |

- Exemplo de JSON retornado:
```json
{
    "message": "Tutorial modificado!",
    "data": {
        "_id": "5d0f0cd9111022002460168a",
        "title": "Criando um Snake do zero com Pygame em 51 minutos (ou mais)",
        "description": "Descrevendo tutorial",
        "status": null,
        "create_date": "2019-06-23T05:23:37.571Z",
        "__v": 0
    }
}
```
- Retorno: `HTTP Status 200` e json retornado e armazenado no banco.
