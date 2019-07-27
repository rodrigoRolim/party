## Aplicativo para realizar e encontrar eventos
Um aplicativo para agendar eventos e comprar ingressos de eventos agendados.
### Módulos do sistema:
1. Módulo de Organizador de eventos
2. Módulo de cliente
3. Módulo de eventos
4. Módulo de ingressos
5. Módulo de pagamento
6. Módulo de estatísticas de vendas

....
### Requisitos funcionais
Para definir um requisito, preencha as tuplas adequadamente. Desta forma, para definir um requisito informe o identificador (**id**), um nome curto e expressivo para o requisito, uma descrição fornecendo pormenores do requisito e a sua prioridade.

|ID|Nome|Descrição|Prioridade|Módulo|
|--|----|---------|----------|------|
|01|Cadastrar um evento| Um organizador de eventos poderá agendar um evento de festa através da plataforma| essencial
|02|Comprar ingresso| Um cliente interassado em algum evento poderá comprar um ingresso para o evento, usando umas das opções de pagamento que estarão disponíveis na plataforma. As opções de pagamentos são descritas em regras de negócio, bem como a forma como se dará a confirmação de compra com sucesso.| Essencial|
|03|Buscar um evento| Um cliente poderá buscar, por meio da plataforma, eventos disponíveis.| Essencial|
|04| Cadastrar cliente | O cliente poderá efetuar um cadastro de conta na plataforma informanda os dados exigidos para realizar o cadastro | Essencial |
|05| Cadastrar organizador de evento | Um usuário poderá se cadastrar no sistema como organizador de eventos, ou seja, como um usuário capaz de cadastrar eventos na plataforma | Essencial|
|06| Comprar produtos vendíveis no evento | O cliente poderá comprar através da plataforma com antecedência, ou seja, antes do evento, comes e bebes que serão vendidos no evento | Desejável |
|07| Cancelar compra de ingresso | O cliente poderá cancelar um ingresso que ele comprou por meio da plataforma. Há um período de cancelamento de comprar. Consulte regras de negócio sobre cancelamento de compra. | Essencial |
|08| Cancelar evento | Um organizador de eventos poderá cancelar um evento. O cancelamento deve ser avisado aos clientes confirmados do eventos e seus créditos devidamente estornados. Para mais detalhes consulte regras de negócios sobre estorno de crédito | Essencial |
|09| Visualizar ingressos comprados pelo cliente | O cliente poderá visualizar os ingresso que ele já comprou. | Essencial |
|10| Adicionar um evento na lista de interesse em eventos de um cliente | O cliente poderá salvar um evento que ele se interessar para posteriormente comprar o ingresso caso queira. O evento ficará salvo na lista de interesses. | Desejável |
|11| Excluir um evento da lista de interesse em eventos do cliente | O cliente pode deixar de se interessar por evento, deste modo o mesmo pode excluir o evento da sua lista de interesses em eventos. | Desejável |
|12| Gerar estatísticas de vendas de ingressos para um evento | O oraganizador de eventos poderá acompanhar, por meio da plataforma, a quantidade de ingressos que ja foram comprados para o seu evento. A plataforma produz estatísticas úteis sobre as vendas de ingressos para um determinado evento, onde o organizador de eventos pode acompanhar como andam as vendas dos ingressos ao longo do tempo. Essas informações úteis estão descritas em regras de negócio. | Importante |
|13| Editar dados de cadastro de cliente | O cliente poderá alterar seus dados de usuário cadastrados na plataforma, quando desejar. | Essencial |
|14| Editar dados de cadastro de organizador de eventos | O organizador de eventos poderá altarar seus dados de usuário cadastrados na plataforma, quando desejar. | Essencial |
|15| Editar dados de um evento | O organizador de eventos poderá alterar os dados sobre um evento através da plataforma. | Importante |
|16| Exibir eventos adicionados | A plataforma deve exibir os eventos adicionados em forma de timeline para os usuários. | Importante |
|17| Fornecer uma área de FAQ | O usuário poderá visualizar as respostas para as dúvidas mais frequentes. | Desejável |
|18| Calcular lucro total das vendas de ingresso de um evento | Para cada evento, a plataforma deverá calcular o valor total obtido com a venda de ingressos ao longo do tempo até a data definida pelo o responsável do evento. | Essencial |
|19| Gerar uma listar de compras de ingressos para um determinado evento | O organizador de um evento poderá visualizar uma lista com uma relação de todos os clientes que comprar ingressos para o seu evento, os que cancelaram a compra e os que compraram mas não compareceram a festa | Essencial |
|20| Calcular lucro obtido com a venda de bebidas, alimentos e outros | A plataforma deverá calcular o lucro obtido com as vendas de outros produtos (bebidas, por exemplo) através da plataforma | Importante |
|21| Gerar bilhete válido como ingresso para o evento | Após a confirmação de pagamentos, a plataforma deverá gerar um código QRcode válido como ingresso, por meio do qual o cliente possa acessa ao evento de seu interesse. | Essencial |
|22| Contabilizar número de clientes que participaram do evento | A plataforma deverá contar quantos clientes tiveram as suas participações confirmadas no evento, por meio da demonstração de seu ingresso para entrar no evento. Ou seja, a plataforma gera uma lista de presença. | Importante |
|23| Logar usuários | A plataforma deverá permitir que os usuários loguem em suas respectivas contas, fornecendo nome de usuário e senha. Assim, a plataforma autentica e autoriza os usuários. | Essencial |
|24| Notificar cliente sobre novos eventos | A plataforma poderá notificar o cliente sobre novos eventos que irão ocorrer baseado em algumas condiçoes, como, por exemplo, a proximidade do cliente com os eventos. Veja todas as regras que definem como notificar um cliente sobre novos eventos em regras de negócio. | Essencial |
|25| Verificar ingresso do cliente | Para entrar em um evento, o cliente deve apresentar seu ingresso (código QRcode) aos recepcionistas do evento, que, usando, por exemplo, um leitor de QRcode, poderá válida o ingresso do cliente. A plataforma deverá verificar se o QRcode é válido, permitindo a entrada do cliente caso sejá válido para o evento em questão.| Essencial |

### Regras de negócio

|ID|Nome|Descrição|Dependências|Módulo|
|--|--|--|--|--|