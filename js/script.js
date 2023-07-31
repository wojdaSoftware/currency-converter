let button = document.querySelector(".form__button");
let form = document.querySelector(".js-form")
let result = document.querySelector(".js-result")

form.addEventListener("input", () => {
    result.innerText = "Wynik:"
})

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = document.querySelector(".js-amount");
    let currencyInput = document.querySelector(".js-currency-input");
    let currencyOutput = document.querySelector(".js-currency-output");
    let exchangeRate = 0;

    switch (currencyInput.value) {
        case "PLN":
            switch (currencyOutput.value) {
                case "PLN":
                    exchangeRate = 1;
                    result.innerText = "Wynik: " + (+amount.value * exchangeRate).toFixed(2) + " " + currencyOutput.value;
                    break;
                case "USD":
                    exchangeRate = 0.25;
                    result.innerText = "Wynik: " + (+amount.value * exchangeRate).toFixed(2) + " " + currencyOutput.value;
                    break;
                case "EUR":
                    exchangeRate = 0.22;
                    result.innerText = "Wynik: " + (+amount.value * exchangeRate).toFixed(2) + " " + currencyOutput.value;
                    break;
            }
            break;
        case "USD":
            switch (currencyOutput.value) {
                case "PLN":
                    exchangeRate = 4.01;
                    result.innerText = "Wynik: " + (+amount.value * exchangeRate).toFixed(2) + " " + currencyOutput.value;
                    break;
                case "USD":
                    exchangeRate = 1;
                    result.innerText = "Wynik: " + (+amount.value * exchangeRate).toFixed(2) + " " + currencyOutput.value;
                    break;
                case "EUR":
                    exchangeRate = 0.90;
                    result.innerText = "Wynik: " + (+amount.value * exchangeRate).toFixed(2) + " " + currencyOutput.value;
                    break;
            }
            break;
        case "EUR":
            switch (currencyOutput.value) {
                case "PLN":
                    exchangeRate = 4.45;
                    result.innerText = "Wynik: " + (+amount.value * exchangeRate).toFixed(2) + " " + currencyOutput.value;
                    break;
                case "USD":
                    exchangeRate = 1.11;
                    result.innerText = "Wynik: " + (+amount.value * exchangeRate).toFixed(2) + " " + currencyOutput.value;
                    break;
                case "EUR":
                    exchangeRate = 1;
                    result.innerText = "Wynik: " + (+amount.value * exchangeRate).toFixed(2) + " " + currencyOutput.value;
                    break;
            }
            break;
    }
});