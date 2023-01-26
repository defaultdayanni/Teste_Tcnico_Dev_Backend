

## O problema

Um Dev Backend na Ginco terá como uma das principais atividades o consumo e criação de APIs para integrar aplicações, por isso o teste envolve a criação de uma API básica utilizando Prisma integrada a um DB SQL hospedado no PlanetScale (As tabelas do DB estão implementadas e pronto pra uso), desenvolvida em NextJS. Caso não conheça essas tecnologias, fique tranquilo, no fim dessa documentação colocamos alguns links básicos para referência.

Nossa API deve ter a função de inserir feriados nacionais presentes em um JSON no DB e também possibilitar a inserção de mais feriados por input via um form simples (o forma já está implementado e pronto pra uso).

Esse repositório deve ser clonado por você para que você desenvolva com base na estrutura de projeto já criada nele. Suas APIs, seguindo a documentação do NextJS, devem ser criadas no diretório /src/pages/api.

A conexão ao banco de dados deve ter sido enviada previamente para você e você deve adicioná-la no arquivo .env na raiz desse repositório. Caso não tenha recebido a URL de conexão, entre em contato com o responsável pela sua entrevista.
Além disso, você receberá também o nome da tabela que você deve usar ao manipular o DB.

## Feriados

Os feriados nacionais fixos são:

- 01/01 Ano Novo
- 21/04 Tiradentes
- 01/05 Dia do Trabalhador
- 07/09 Independência
- 12/10 Nossa Senhora Aparecida
- 02/11 Finados
- 15/11 Proclamação da República
- 25/12 Natal

## Solução

Para resolver esse problema você deve desenvolver uma API que permita consultar
e cadastrar feriados nacionais.

Você deve desenvolver as seguintes funcionalidades:

1. Inserir todos os feriados presentes no JSON no DB. (Note que o JSON contém os campos: data, nome, tipo, descricao, uf e municipio. Você NÂO DEVE inserir os campos uf e municipio. Insira na tabela apenas os campos: data, nome, tipo e descricao). Você encontrará o JSON `feriados_nacionais_2023.json` na raiz do repositório.

2. Uma rota que ao ser requisitada, devolva como resposta todos os dados inseridos na tabela e o http status 200.

3. Uma rota para consultar feriados, com os seguintes requisitos:

   3.1) A rota deve ter a seguinte estrutura:

   ```
       localhost:xxxx/api/read?date=yyy-mm-dd
   ```

   3.2) Quando receber uma data válida, deve fazer a busca na tabela e retornar status 200 e todos os campos de informação do feriado buscado.

   3.3) Quando receber uma data válida, porém não encontrar uma data correspondente na tabela, deve retornar status 202 e o texto: "Essa data não é um feriado".

   3.4) Quando receber uma data inválida, ex: 32-14-2023, deve retornar status: 201 e o texto: "Data invalida, use o formato {link-api}?date=YYYY-MM-DD"

4. Uma rota que vai receber um input do formulário acessível na página principal do repositório.

   4.1) Esse formulário está configurado para fazer a requisição para o arquivo "criaferiado.js", localizado no diretório /src/pages/api. Crie sua função dentro desse arquivo.

   4.1) A função criada deve inserir o feriado na tabela usando os mesmos campos citados acima. E deve retornar status 201, caso tenha inserido com sucesso na tabela e status 500 caso tenha ocorrido algum erro na inserção. O frontend está configurado para tratar esses status.

Exemplo - O comportamento ao buscar o feriado do dia 1 de janeiro de 2023, para tópico 3, deve ser, como segue:

```
localhost:3000/api/read?date=2023-01-01
{
    "data":"2023-01-01T00:00:00.000Z",
    "nome":"Ano Novo",
    "descricao":"O Ano-Novo ou Réveillon é um evento que acontece quando uma cultura celebra o fim de um ano e o começo do próximo. A celebração do evento é também chamada Réveillon, termo oriundo do verbo francês réveiller, que em português significa DESPERTAR"
}
```

