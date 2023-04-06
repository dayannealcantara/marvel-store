# Projeto em NextJS usando API da Marvel 

A aplicação tem como função listar, detalhar e adicionar ao carinho de compras os quadrinhos da marvel; e se alimenta da API :"https://developer.marvel.com/".

# Tecnologias utilizadas
* NextJS;
* Styled-componenets;
* ContextAPI;

# Requistos funcionais da aplicação 

* Tela carregar quadrinhos;
* Modal com detalhes do quadrinho selecionado;
* Tela de carinho com resumo de compra dos quadrinhos;
* Detalhamento de entrega ao destinatário;

# Quadrinhos
 
Na tela inicial é renderizada a listagem  com as capas e informações dos quadrinhos, através do consumo da API da marvel; tendo também um ícone de carinho de compras que mostra o total de itens adicionados.

# Modal
 
No modal é possível ver mais detalhes do quadrinho selecionado.

# Comprar

A tela  de compra mostra as informações dos quadrinhos adicionados pelo usuário, também é possível mostrar através da inserção de endereço do mesmo a localização de destino da entrega através da requisição da API do google maps.

# Local de Desenvolvimento

```
# Instalar dependencias do package.json
$ yarn 

# Executar projeto
$ yarn dev


