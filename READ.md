<!-- Implemente a TV Show API, uma api de cadastro e consultas de séries de TV e Streaming.

Ela deve conter o seguinte modelo de dados (campos com asterisco são obrigatórios):

- Show (série):
    id* -> hash string (identificador)
    title* -> string
    premiere* -> date
    is running -> boolean
    language* -> string
    main genre* -> string
    poster url -> string -->

<!-- Os seguintes endpoints devem ser implementados:

- POST /shows -> Recebe no corpo da requisição um JSON contendo as propriedades  title, isRunning, language, mainGenre e, possivelmente, posterUrl e cadastra uma nova série com os dados informados. Caso algum campo obrigatório não esteja contido no JSON, devolve o status 400 e o seguinte JSON: { "error": "At least one mandatory field was not informed"}. Caso contrário, devolve o status 201 e um JSON contendo o id da série cadastrada; -->

<!-- - GET /shows/:title -> Recebe o Path Param title, contendo o título ou parte do título de uma série e então devolve todas as séries correspondentes. Devolve o status 200 e um JSON contendo o array shows, o qual por sua vez contém todos os dados das séries correspondentes. A pesquisa deve ignorar maiúsculas e minúsculas.

A API deve armazenar os dados em um banco de dados no MongoDB. Crie um contêiner Docker para manter o banco de dados.

Coloque o projeto da sua API contendo tanto os códigos fonte quanto o arquivo docker-compose.yml em um repositório no Github. Envie o link do repositório exclusivamente aqui pelo Moodle até as 23:59 do dia 14/08/2024. Esta avaliação deve ser realizada individualmente e vale até 10 pontos. -->

