# Estudo preliminar

## 1. Introdución
Debido ao recente auxe e a popularidade crecente de novas divisas dixitais (criptomoedas ou criptodivisas), que poñen ao alcance de calquera persoa con conexión a internet o poder invertir diñeiro nun produto financierio e así xerar beneficios, aparece a idea de crear unha app web mediante a cal poder informarse sobre as diferentes criptodivisas.

## 2. Obxetivo
Esta aplicación web busca proporcionar unha interfaz agradable e sinxela mediante a cal poder obter información sobre as diferentes criptomoedas dispoñibles no mercado, dende ver o precio actualizado a tempo real ata ver as noticias máis populares do día sobre criptomoedas, pasando por un seguemento persoal da tua inversión nas diferentes criptomoedas existentes no mercado.

## 3. Definicións 
- Vocabulario técnico:
	- ATH: all time high, prezo máis alto acadado por unha divisa dende o seu lanzamento.
	- Altcoins: criptomoedas principales, o líder indiscutible sería bitcoin (BTC). Aqui ábrese un espazo de debate no que hai partidarios e detractores de incluír outras criptomoedas, como ETH por exemplo.
	- Capitalización de mercado: é unha medida de magnitude económica dunha criptomoeda. Calcúlase multiplicando o precio desa criptomoeda polo total de criptomoedas en circulación.
	- Criptografía: conxunto de técnicas de cifrado de información que se usan para protexer datos sensibles. As criptomoedas e s blockchains están construidas con criptografía avanzada.
	- Criptomoeda: moeda basada exclusivamente na criptografía. A diferencia das moedas emitidas por gobernos e bancos centrais, xérase ca resolución de problemas matemáticos basados na criptografía. O seu valor, non obstante, está suxeito á variación de prezos, dependendo da oferta e da demanda dos mercados.
	- Exchange: punto de encontro dónde se realizan intercambios de criptomoedas a cambio de diñeiro ou de outras criptomonedas.
	- ROI: return of investment, razón financieira que calcula o beneficio obtido dunha inversión.
	- Token: moeda dixital construída con criptografía que depende da rede blockchain doutra moeda para existir.

## 4. Audiencia
A audiencia principal desta aplicación será calquera persoa que independentemente da idade, sexo ou situación social acabe de empezar a interesarse polas inversións en criptomoedas e busque un servizo que ofreza información de calidade de forma sinxela e amigable.

## 5. Necesidades
- Debido ao auxe e ao crecemento desmesurado nos últimos anos e meses da popularidade das inversións en criptomoedas, xorde a necesidade de servizos que proporcionen información actualizada e noticias sobre estas ou nos permitan levar un seguimento das nosas inversións.
- Na actualidade xa existen diversos servizos que solucionan este problema en maior ou menor medida. Dende servizos que son realmente completos e ofrecen decenas de funcionalidades ata servizos que son máis modestos e simplemente contan con unha funcionalidade específica. Uns exemplos poden ser [Nomics](https://nomics.com/), [CoinMarketCap](https://coinmarketcap.com/es/) ou [Coingecko](https://www.coingecko.com/es)
- A pesar de que o problema descrito con anterioridade xa está cuberto por diversos proxectos, quizáis é necesario un proxecto máis claro dirixido especialmente a persoas que se esten iniciando neste mundo.
- O que se busca neste caso é facilitar a información aportándolle ao usuario final unha interfaz clara e intuitiva.

## 6. Modelo de negocio 
Pese a que nun principio non estaría pensado comercializar e sacar beneficios da app, nun futuro e sempre que teña unha base de usuarios decente, sopesarase a opción de poñer varios tipos de suscripción de pago para poder obter diversas vantaxes.

### 6.1. Viabilidade

#### 6.1.1. Viabilidade técnica
- A viabilidade técnica deste proxecto é perfectamente asequible xa que se necesitan poucos recursos tanto de hardware e software como humanos, polo que será posible sen problema a disposición destes.

#### 6.1.2. Viabilidade económica
- Neste proxecto non se esperan uns grandes beneficios iniciais dado que será completamente gratuito no seu lanzamento. Máis adiante sopesase a opción de implementar tarifas mensuais para usuarios premium con certas vantaxes fronte á versión gratuita.
- Pese a ser gratuito pensouse nunha forma de financiamento inicial para cubrir un pequeno porcentaxe dos gastos, esta é mediante doazóns voluntarias dos usuarios. As doazóns poderán realizarse tanto en diñeiro como en criptomoedas, facilitando tanto unha conta de Paypal para o primeiro como unha dirección de billeteira de BTC e de ETH para o segundo. 

### 6.2. Competencia
- Como xa se mencionou anteriormente, actualmente existen no mercado numerosos proxectos co mesmo ou parecido obxetivo. Existen algúns moi ben posicionados como poden ser [CoinMarketCap](https://coinmarketcap.com/es/) e outros menos coñecidos como o caso de [Nomics](https://nomics.com/) 

### 6.3. Promoción
- A promoción da aplicación realizaríase mediante redes sociais, instagram principalmente, creando unha conta oficial da aplicación e invertindo unha pequena cantidade de diñeiro en anunciarse nesta rede. Evidentemente tamén se intentará ter un bo posicionamento web para aparecer o máis arriba posible nos resultados das búsquedas de google, ainda que este aspecto é moi complicado debido a competencia deste sector.
    
### 6.4. Modelo de negocio
- Como se explicou no punto 6.1.2, nun principio será completamente de balde. Máis adiante, implementaranse anuncios (sen que estes sexan abusivos/intrusivos, e en ningún caso prohibir o uso de adblockers) así como un modelo de negocio "freemium" co cal obter unha serie de vantaxes fronte á versión gratuita entre as que se inclúe a eliminación dos anuncios.

## 7. Requerimentos

### 7.1. Infraestructura:
- Necesitarase un servidor web dedicado que, a falta de confirmar ao 100%, utilizarase un VPS con custo 0 (este conta con unhas características modestas pero que serán suficientes, polo menos inicialmente). Este mismo VPS tamén albergará un servidor de base de datos.

### 7.2. Back end
- Para o desenvolvemento do backend utilizarase a linguaxe Java xunto con Hibernate como ORM, e probablemente tamén se usará RxJava para traballar coa API que proporcionará os datos en tempo real ([Coingecko API](https://www.coingecko.com/es/api), esta API é gratuita e permitiranos realizar ata 100 peticións por minuto). Pola parte de bases de datos usarase MySQL.

### 7.3. Front end
- En canto ao front end utilizarase o framework de JavaScript Angular 10 e HTML5 máis CSS.

# 8. Diagrama de Gantt
![Diagrama de Gantt](https://i.imgur.com/LJRUY9r.png)
