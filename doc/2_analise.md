# Análise: Requerimentos do sistema

Este documento describe os requirimentos para Crypfolio especificando qué funcionalidade ofrecerá e de que xeito.

## 1. Descrición xeral

O proxecto Crypfolio consiste nunha aplicación web para permitir aos usuarios obter información das principais 1500 criptomoedas por orden de capitalización de mercado, por iso, a funcinalidade da aplicación trátase principalmente do uso de datos obtidos en tempo real. Pero ademáis permite levar un rexistro da evolución das criptomoedas que o usuario desexe nunha carteira totalmente persoal.

## 2. Funcionalidades

A principal solución que ofrece crypfolio na sua primeira versión é a consulta de criptomoedas. Dende ela poderánse listar e acceder a información en detalle de máis de 1000 criptomoedas.

Por outra parte tamén permite a creación dun portfolio persoal no cal levar un rexistro das criptomoedas que un usuario posúe e así poder ter información sobre as ganancias/pérdidas dun só vistazo.

1. Listar criptomoedas por orden de capitalización de mercado.
2. Consultar información en detalle dunha criptomoeda en concreto.
3. Crear un portfolio persoal no que poder engadir ou eliminar criptomoedas indicando o prezo de compra para levar un seguimento das ganancias/pérdidas.
4. Rexistro e login de usuarios.
 
## 3. Requerimentos non funcionais

### Seguridade
No que a requerimentos non funcionais se refire, farase énfase na seguridade usando o framework de Java, Sping Security, que nos prove tanto de sistemas de autorización como de autenticación para a nosa app web. Por falta de tempo non se logrou implementar TSL no servidor para ter permitirlle ao usuario ter unha comunicación segura, polo que queda pendente para próximas versións.
### Usabilidade
En canto a usabilidade, a app ten un deseño sinxelo e intuitivo que permite que ata os usuarios máis básicos fagan uso dela e non se perdan ou non entendan o funcionamento. Ao basarse principalmente na obtención e mostra de datos en tempo real e minimizar a interacción do usuario ao apartado da carteira persoal resulta moito máis sinxela de usar. O deseño é completamente responsive polo que se poderá consultar a app web dende dispositivos con tamaños de pantalla variados.
### Rendemento
A API mediante a que se obten os datos permite ata 100 peticións por minuto para garantir o correcto funcionamento en todo momento da aplicación. O servidor no que está aloxada a aplicación ten unhas características que permitirán que a conexión sexa estable e que esté dispoñible o máximo tempo posible.

## 4. Tipos de usuarios

Na aplicación so haberá dous roles principais, administrador e usuario, os cales serán suficientes para xestionar a aplicación ao completo. Os usuarios con rol administrador poderán xestionar nun futuro outras funcións que na versión actual non están implementadas (como por exemplo a creación, modificación e eliminación de noticias relacionadas con criptomoedas). Polo tanto, nesta primeira versión, so veremos dispoñibles usuarios co rol de usuario normal, que será suficiente para administrar as suas carteiras de criptomoedas persoais.
 
## 5. Entorno operacional

### 5.1. Dominio

Pola parte do dominio atopámonos ca dirección principal da páxina web que será accesible dende calquera parte. Esta dirección é http://www.crypfolio.eu

### 5.2. Hardware

O hardware usado divídese en dous apartados: 
- Hardware para o desenvolvemento da app:
    + Ordenador persoal de sobremesa, cunha base de datos MySQL instalada e configurada con XAMPP e facendo uso de PhpMyAdmin para administrar manualmente a bbdd. 
    + Smartphone persoal e ferramentas de desenvolvemento integradas nos navegadores Chrome e Firefox para adaptar a aplicación a dispositivos móviles.
- Hardware para o desplegue da app:
    + Neste caso contamos cun servidor VPS que conta con 2 CPU virtuais Intel Xeon, 4GB de memoria RAM e un disco SSD de 80GB, o cal será completamente suficiente para servir a app e soportar o tráfico inicial (nun futuro, cando a aplicación se encontre en versións posteriores e o tráfico de datos sexa maior, o proveedor do servidor ofertanos a posibilidade de mellorar as caracteristicas deste de maneira sinxela).

### 5.3. Software

Como é de supoñer, xa que usamos dous tipos de hardware diferentes dependendo do entorno no que se atope a app, o software non será menos.

- Software para o desenvolvemento:
    + Front-end: usouse o framework Angular (12.0.3) que nos aporta a posibilidade de simplificar o desenvolvemento da app podendo dividir esta por compoñentes que se poderán reutilizar en diferentes zonas desta. Xunto con Angular usamos HTML para definir a estructura da páxina e SASS para definir os estilos. No apartado de lóxica da app usamos TypeScript. A parte disto Angular ofrécenos a posibilidade de configurar e usar compoñentes e módulos externos simplemente instalándoos mediante un comando, algúns dos usados neste caso son: @angular/jwt (para implementar o uso de JWT, Json Web Token), @fortawesome/angular-fontawesome (facilitaranos o uso de iconos), angular-highcharts e ng2-charts (uso de gráficas).
    + Back-end: neste caso fixemos uso de Java xunto co framework Sping Boot (o cal inclúe o estándar JPA que nos servirá para crear dinamicamente a bbdd) e Spring Security. Para poder acceder aos datos da bbdd faise uso dunha API REST. Por outro lado, en canto a base de datos usouse MySQL así como PhpMyAdmin para xestionala de forma gráfica.
- Software para o desplegue:
    + Para servir o front-end usamos o servidor web IIS (internet information services), para isto simplemente usamos o comando ng-build da consola de Angular que nos compilará e construirá a app xerando unha carpeta "dist" que conterá todos os arquivos necesarios para o seu desplegue. En canto ao back-end usaremos un servidor Tomcat na sua versión 9, no cal desplegaremos un ".war" do proxecto Java (xerado previamente dende eclipse). Por último, para a base de datos, usaremos de novo e igual que no entorno de desenvolvemento unha base de datos MySQL e tamén PhPMyAdmin para xestionala facilmente de forma gráfica.

## 6. Interfaces externos
A comunicación de Crypfolio co exterior divídese en varios tipos.

### Inferfaces de usuario
As interfaces ás que terá acceso o usuario serán catro principalmente. 
- Pantalla home ou "moedas": É a pantalla de "benvida" da aplicación, nela atópase un listado con máis de 1000 criptomoedas paxinadas de cen en cen.
- Pantalla de detalles: Mostraranos información máis en profundidade sobre unha criptomoeda determinada (gráfico coa evolución de prezos, capitalización, suministro máximo...)
- Login ou rexistro: Neste apartado poderemos rexitrarnos ou ben iniciar sesión se xa o estamos.
- Carteira: Nesta páxina permitiráselle ao usuario crear e configurar a súa propia carteira de criptomoedas para así levar un rexistro.

### Hardware
Pola parte do hardware no lado do servidor, Crypfolio fará uso dunha interface de rede que lle permitirá tanto comunicarse cos usuario como obter os datos en tempo real sobre as criptomoedas. Por outra banda, no lado do cliente só será necesario un ordenador ou un smartphone/tableta con conexión a internet e un navegador web.

### Software
Crypfolio comunicaráse con diverso software. A aplicación recollerá os datos e mostraráos no front-end facendo uso dunha API (https://www.coingecko.com/es/api). O front-end tamén se comunicará cunha API propia realizada no back-end que proporcionará datos relativos aos usuarios e á carteira persoal de cada un deles obtidos dende a base de datos MySQL.

## 7. Melloras futuras

A causa de certos problemas persoais, o tempo de desenvolvemento da aplicación foi menos do desexado, quedando no camiño certas funcionalidades sen implementar pero que se porán en marcha en futuras versións. Entre as próximas melloras atópanse as seguintes: 
- Modificación de datos de usuario dende unha nova páxina "A miña conta" accesible para todos os usuarios rexistrados. Poderán cambiar o seu contrasinal, email, nome ou usuario, así como eliminar a conta por completo.
- Creación dunha sección de noticias de actualidade sobre criptomoedas.
- Implementación de TSL para garantir unha comunicación segura entre o cliente e a aplicación.
- Almacenamento directo na base de datos da información das criptomoedas (encargándose esta de actualizarse cada 2 minutos e servir os datos directamente aos usuarios) para aliviar a carga da API de Coingecko e poder soportar un maior tráfico na app.
- Sección de favoritos que permitirá ao usuario marcar as criptomoedas favoritas na páxina de inicio e non ter que buscalas no listado. 
- Caixa de búsqueda, para axilizar a búsqueda dunha criptomoeda en concreto.




