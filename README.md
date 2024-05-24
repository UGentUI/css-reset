# CSS reset

De basis stylesheet voor het UGent UI Design System.

## Inleiding

Dit pakket exporteert een CSS-bestand dat een minimale reset en basisstijlen voor veel HTML-elementen biedt. Het is bedoeld als basis voor alle verdere styling, wat zorgt voor een consistente en gestroomlijnde uitstraling van de applicaties. Het UGent UI Design System is op deze fundering gebouwd om ervoor te zorgen dat alle elementen naadloos integreren en een uniforme gebruikerservaring bieden.

## Demo

https://ugentui.github.io/css-reset/

## Installatie

```bash
npm add @ugent-ui/css-reset
```

## Gebruik

De CSS-reset moet de eerste stylesheet op je pagina zijn. Alle andere CSS styles moeten na de CSS-reset worden opgenomen.

> [!NOTE]
> Bundel dit pakket samen met je applicatie voor betere betrouwbaarheid, prestaties en controle over versiebeheer.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <link
      rel="stylesheet"
      href="node_modules/@ugent-ui/css-reset/dist/assets/reset.css"
    />
    <!-- andere CSS styles -->
  </head>
  <body>
    <p>Hello UGent!</p>
  </body>
</html>
```
