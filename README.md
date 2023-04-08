# Projeto em NextJS usando API da Marvel 

A aplicação tem como função listar, detalhar e adicionar ao carinho de compras os quadrinhos da marvel; e se alimenta da API :"https://developer.marvel.com/".

# Tecnologias utilizadas
* NextJS;
* TypeScript;
* Styled-componenets;
* ContextAPI;
* Hooks

# Requistos funcionais da aplicação 

* Listagem dos quadrinhos com scroll infinito;
* Modal com detalhes do quadrinho selecionado;
* Tela de carinho com resumo de compra;
* Cadastrar endereço de entrega;
* Detalhamento de entrega ao destinatário com localização via maps;

# Quadrinhos
 
Na tela inicial é renderizada a listagem  com as capas e informações dos quadrinhos, através do consumo da API da marvel; tendo também um ícone de carinho de compras que mostra o total de itens adicionados.

# Modal
 
No modal é possível ver mais detalhes do quadrinho selecionado.

# Comprar

A tela  de compra mostra as informações dos quadrinhos adicionados pelo usuário, também é possível mostrar através da inserção de endereço do mesmo a localização de destino da entrega através da requisição da API do google maps.

# Local de Desenvolvimento

```
# Instalar dependências do package.json
$ yarn 

# Executar projeto
$ yarn dev


