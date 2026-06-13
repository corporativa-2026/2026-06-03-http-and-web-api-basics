import { createServer } from 'node:http';

// criar um objeto server através da função createServer do módulo http
const server = createServer();

// O objeto server é um EventEmitter, ou seja,
// ele emite eventos. O evento 'request' é
// emitido toda vez que o servidor recebe uma requisição.
server.on('request', function(request, response) {
  // se a URL da requisição for '/hello', ex.: localhost:11111/hello
  if (request.url === '/hello') {
    response
      .setHeader('content-type', 'text/plain; charset=utf8');
    response.end('👋');
  // para qualquer outra URL, o servidor responde com um status code 404 NOT FOUND
  } else {
    response.writeHead(404, 'NAO ENCONTRADO');
    response.end();
  }
});

// é necessário informar o número da porta
// para o servidor começar a escutar as requisições
const port = 11111;

// o método listen do objeto server
// é responsável por iniciar o servidor
// e fazer com que ele comece a escutar
// as requisições na porta informada
server.listen(port, function() {
  // callback que é executada quando o servidor
  // começa a escutar as requisições
  console.log('Escutando na porta', port);
}); // 1024 < porta < 65536

// abrir o navegador e acessar
// http://localhost:11111/hello para ver a resposta
