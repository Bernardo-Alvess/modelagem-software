Você foi contratado para desenvolver um sistema de configuração para uma aplicação web. Este sistema deve garantir que apenas uma única instância da classe de configuração seja criada durante todo o ciclo de vida da aplicação, independentemente de quantas vezes a classe seja chamada. Este padrão de design é conhecido como Singleton.

A classe de configuração deve conter as seguintes funcionalidades:

Atributos de Configuração: A classe deve armazenar diferentes configurações, como apiUrl, port, e environment.

Métodos de Configuração:

getConfig: Retorna o valor de uma configuração específica.
setConfig: Permite definir ou atualizar o valor de uma configuração específica.
Instância Única: A classe deve garantir que apenas uma única instância exista. Se a classe for instanciada novamente, deve retornar a instância já existente.

Requisitos:
Classe Singleton:

Implemente uma classe chamada ConfigSingleton.
Utilize um mecanismo para armazenar a instância única da classe.
Assegure que qualquer tentativa de criar uma nova instância da classe retorne a instância já existente.
Atributos e Métodos:

A classe deve possuir um objeto de configurações (config) onde todas as configurações serão armazenadas.
Implemente os métodos getConfig e setConfig para acessar e modificar as configurações.
Testes:

Demonstre o funcionamento da classe criando múltiplas "instâncias" e provando que todas referenciam a mesma instância.
Mostre a configuração sendo definida em um local e acessada de outro, confirmando a consistência da instância única.
