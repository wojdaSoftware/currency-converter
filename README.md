# Simple currency converter
This site is a simple currency converter with 3 currencies to choose from.

## Demo and preview
https://kvasir124.github.io/currency-converter/

## Technologies
* HTML
* CSS
  * BEM naming convention
  * Normalize.css
* Javascript
  * ES6+ features

## Site functionality
![converter-use](https://github.com/Kvasir124/currency-converter/assets/141030238/824fea5a-12ec-4087-9a66-47ee2164813d)

The site maintains basic reactivity and handles small screens well. The whole converter is fit inside a form. The user may choose a custom amount of currency (must be >0;  the minimal step is 0,01) and choose both the input and output currency. Conversion happens upon submitting the form. Determining the exchange rate is accomplished using nested switch statements. The chosen amount of currency is then multiplied by the determined exchange rate and shown to the user in the box below the main form. The result box clears every time the code detects any user input within the form.
