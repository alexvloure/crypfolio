## Manual técnico do proxecto

### Instalación

Características de instalación.


Para realizar unha instalación de crypfolio nun entorno local compre cumprir os seguintes pasos:
(Aconséllase realizar a instalación nun sistema Windows ou nun equipo baseado en Linux para evitar problemas)
- Instalar NodeJS. Podemos descargalo dende https://nodejs.org. Unha vez o temos instalado procedemos a instalar Angular, para isto simplemente executamos o seguinte comando dende a consola: ```npm install -g @angular/cli```
- Clonar o respositorio que contén tanto o front-end como o back-end dende o seguinte enderezo de GitLab
- Instalar as dependencias do front-end. Para isto simplemente nos situaremos na raíz do front-end e dende a consola executaremos o comando ```npm install```
- Instalarmos un servidor Tomcat, o cal nos permitirá o desplegue do back-end de forma sinxela. Para isto, simplemente teremos que dirixirnos á paxina de administración e dende ahí seleccionar o arquivo .war previamente descargado dende GitLab para desplegalo. (outra opción para o back sería importar o proxecto enteiro como un proxecto maven e executar a clase "CrudApplication.java").
- Instalar MySQL e executar o script de instalación da base de datos.

### Administración do sistema
O primeiro que haberá que facer logo de desplegar localmente a aplicación será crear (directamente mediante a pantalla de rexistro da aplicación) o usuario "admin", xa que será a este a quen se lle asigne o rol de administrador. Tamén cabe destacar que é recomendable realizar copias de seguridade da base de datos cada certo tempo (o que se crea convinte según a cantidade de usuarios que utilicen a aplicación).
A parte diso, non será necesario realizar ningunha configuración máis, a aplicación quedará lista para o seu uso dende o primeiro intre.


### Mantemento do sistema
Como xa se comentou noutros apartados, a aplicación seguirá a desenvolverse e subiranse futuras versións ao repositorio de GitLab asi como ao seguinte repositorio de GitHub url. Estas versións implementarán novas funcionalidades e correxirán erros que se vaian atopando, polo tanto aquela persoa que pretenda facer uso da aplicación en local deberá estar pendente destes repositorios de cara a ter a aplicación o máis actualizada posible e máximizar a sua estabilidade. 

## Xestión de incidencias
Se nun casual existisen incidencias en relación a accesos non autorizados á base de datos, compre realizar un aviso mediante email a tódolos usuario da aplicación para que tomen as medidas consecuentes así como investigar cal foi o erro polo que isto sucedeu e reforzar a seguridade neste aspecto (dado que a administración da base de datos é completamente relativa ao administrador da aplicación, non é necesario comunicarllo ao desarrollador). No caso de existir erros no desplegue da app o procedemento a seguir neste caso sí sería contactar co desarollador directamente por email para que este trate de axudar na configuración e así dar a coñecer cales son os motivos polos que o desplegue pode ser erróneo para telos en conta e engadir estes motivos aos manuais de uso da aplicación. 

Por outra banda se estas incidencias están relacionadas con erros de software, será convinte que o administrador da aplicación o comunique abrindo unha incidencia no repositorio de GitHub para que se teña en conta en futuras versións da aplicación dependendo do seu nivel de gravidade.

## Política de privacidade

[Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDPGDD)](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673)

[General Data Protection Regulation (GDPR)](https://eur-lex.europa.eu/eli/reg/2016/679/oj)

## Manual de usuario
O uso da aplicación e dado que polo momento non ten funcionalidades que sexan complexas será sinxelo e non requerirá dunha explicación detallada desta. Calquera usuario que esté mínimamente acostumbrado a navegar pola rede poderá facer uso da aplicación sen problema. En futuras versións, e dado que se engadiran novas funcionalidades, si que será necesario engadir unhas instruccións ou un FAQ que conteste as preguntas máis frecuentes relativas ao uso da aplicación por parte dos usuarios.
