# Enunciado: Aplicação do Conceito de Factory Class
**Enunciado gerado pelo chatGPT**

Desenvolva um sistema de gerenciamento de doações para a plataforma DO NATION que permita a criação de diferentes tipos de usuários (doadores, organizações e administradores). Cada tipo de usuário deve ter atributos e métodos específicos. Utilize o conceito de Factory Class para implementar a criação dos objetos correspondentes aos diferentes tipos de usuários, garantindo que a lógica de instanciamento esteja centralizada e desacoplada do código cliente.

# Requisitos:
### Tipos de Usuários:

- **Doador**:
    - Atributos: nome, e-mail
    - Métodos: doar
- **Organização**:
    - Atributos: nome, e-mail.
    - Métodos: criar campanha
- **Administrador**:
    - Atributos: nome, e-mail, permissões.
    - Métodos: gerenciar usuários
## Factory Class:

Implemente uma classe UserFactory com um método createUser que recebe um parâmetro indicando o tipo de usuário e retorna uma instância do tipo apropriado.
O método createUser deve suportar a criação de doadores, organizações e administradores.

## Implementação:

Crie as classes Doador, Organizacao e Administrador, cada uma com seus atributos e métodos específicos.
A classe UserFactory deve encapsular a lógica de criação dos objetos, retornando instâncias das classes corretas com base no parâmetro de entrada.