# Codificación e Probas

## Codificación

No que a codificación se refire, surxironme diversos problemas durante o proceso que provocaron que me tivese que desviar da folla de ruta planificada nun primeiro intre. O que máis afectou ao desenvolvemento e os plazos planificados foi un problema de saúde polo cal tiven que ser intervido que provocou que estivese mes e medio sen poder facer nada (concretamente dende o 2 de xuño ate o 14 de xullo) e a pesar de que intentei poñer os medios para levar a cabo a codificación en prazo, as circunstancias logo da operación non foron as mellores por desgracia.

Unha vez estiven recuperado tiven que recuperar o tempo perdido, dedicándolle máis horas das que tiña previsto por día e, pese a isto, deixándome funcionalidades planificadas sen poder implementar por falta de tempo, asi como tendo que buscar outras formas de mostrar os datos da pantalla principal (mostrandoos directamente da api, sen gardalos na base de datos) en lugar de facelo como o pensara nun primeiro momento (esto sen dúbida será a primeira mellora que se implemente, xa que é tremendamente importante para a estabilidade da aplicación non superar as 100 peticións por minuto da API de Coingecko, que, ainda que de momento non existe problema de sobrepasalas, nun futuro non sería tan raro que sucedese).

Pese a todo, fun logrando desenvolver a app e poñela en marcha cas funcionalidades suficientes para o que eu considero que debe ser unha primeira versión desta. Por outra banda cheguei incluso a adquirir e configurar totalmente un VPS para o seu desplegue xa que me parece a mellor forma de presentalo.

## Probas
No que respecta as probas, dado o tempo escaso que me quedou logo do sucedido comentado no apartado anterior, cheguei a conclusión de que a mellor forma de facelas era facelas según iba codificando algo novo, dado que de surxir un erro ou bug seriame moito máis sinxelo resolvelo no momento, tendo todo fresco e evitando que ese erro se arrastrase durante toda a aplicación. Polo que desta forma, cada vez que implementaba algo novo, probábao a fondo antes de continuar ca seguinte cuestión que tivese pendiente.

Unha vez finalizada a codificación, fixen un repaso xeral de todas as funcionalidades comprobando que todo estaba correcto, tamén escollin a un usuario de probas que nunca antes estivera en contacto coa aplicación para que fixese uso dela, xa que esta é unha boa forma de atopar erros que podemos pasar por alto. E, como estaba previsto, efectivamente este usuario atopou diversos erros ao facer uso da aplicación dunha forma distinta á que fóra planificada nun inicio. Isto sin duda axudoume a que a aplicación sexa máis estable e resistente.

