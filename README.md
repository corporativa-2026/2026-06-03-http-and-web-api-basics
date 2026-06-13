# HTTP e Web API

_Desenvolvimento Web_, geralmente separado em:

- Frontend
- Backend
- Full Stack (inclui o DB)

Devo aprender o quê? Talvez investir em carreira [T-shaped](https://en.wikipedia.org/wiki/T-shaped_skills)

Importante? `INTERNET !== WEB`

Web (protocolo) World Wide Web
----------

- Internet (rede)
- Primeiro(a) programador(a): Ada Lovelace
- Pai da computação: Alan Turing ----- O Jogo da Imitação (The Imitation Game)

Onde nasceu a Web? [CERN](https://commons.wikimedia.org/wiki/File:Where_the_WEB_was_born.jpg)
Por quem? [Sir. Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee)
Para quê? hypertext e hyperlink para _ligar_ informções.
Quando? ~1990

HTTP é um Protocolo de Comunicação inicialmente baseado em texto:
**H**yper
**T**ext
**T**ransfer
**P**rotocol

HTTP é Web sobre a Internet
HTML é uma linguagem sobre o HTTP interpretadas pelos browsers (navegadores)
Pode existir HTTP sem HTML, de fato, há muito aplicativo se comunicando por HTTP que não usa HTML.

-- UM OU MAIS SERVERS EM CADA CONTINENTE
Content
Delivery
Network

Outras tecnologias Web: CSS, JS meio dos 90's, assim como multimídia (não apenas texto)

A Web/HTTP é cliente/servidor (_client/server architecture_)

`CLIENTE: Aplicativo/Navegador`
   HTTP REQUISIÇÃO
   ------------------------------->  `SERVIDOR WEB`
   <-------------------------------
                       RESPOSTA
HTTP**S** --> HTTP Secure (criptografado em trânsito)

A outra ponta: o SERVER
   lógica da aplicação (backend)
   endereços e padrões de requisição e resposta
   API (Interface de Programação da Aplicação)
   **A**pplication
   **P**rogramming
   **I**nterface   

Contitui o backend uma plataforma (linguagem de programação e bibliotecas (built-it)) que permita instanciar um servidor http.

servidores de alto nível e baixo nível (node:http)
          menos detalhado          mais detalhado
(express) ímplicito                explícito (node:http)

