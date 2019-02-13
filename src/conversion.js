import { CurrencyData } from "./CurrencyInf";
import { handler } from "./handler";
import { Dom } from "./dom";
export class Conversion {
	constructor(data) {
		this.data = data;
		this.digitRegex = new RegExp(/^\d+$/);
		this.CurrencyObjects = {};
		this.currency = 0;
		this.desiredCurrency = 0;
		this.error = false;
	}

	convert(currencyValue, desiredCurrencyValue) {
		if (this.digitRegex.test(handler.input.value)) {
			let inputint = parseInt(handler.input.value);
			let ConvertedCurrency =
        Math.round(((currencyValue * inputint) / desiredCurrencyValue) * 100) /
        100;
			return ConvertedCurrency;
		} else {
			let errorComunication = !this.error;
			handler.input.classList.toggle("error");
			handler.inputerror.classList.toggle("isActive");
			return errorComunication;
		}
	}

	count() {
		handler.submitButton.addEventListener(
			"click",
			ev => {
				for (let i = 0; i < handler.leftCurrencyField.options.length; i++) {
					let firstSelectedOption = handler.leftCurrencyField.options[i];
					let secondSelectedOption = handler.rightCurrencyField.options[i];

					if (firstSelectedOption.selected) {
						let currencyValue = new CurrencyData(
							this.data,
							firstSelectedOption.value
						).getUrl();
						this.CurrencyObjects.CurrencyName = currencyValue["name"];

						if (
							typeof currencyValue["mid"] === "number" &&
              typeof currencyValue["mid"] != "undefined"
						) {
							this.currency = currencyValue["mid"];
						}
					}
					if (secondSelectedOption.selected) {
						let desiredCurrencyValue = new CurrencyData(
							this.data,
							secondSelectedOption.value
						).getUrl();
						this.CurrencyObjects.desiredCurrencyName =
              desiredCurrencyValue["name"];

						if (
							typeof desiredCurrencyValue["mid"] === "number" &&
              typeof desiredCurrencyValue["mid"] != "undefined"
						) {
							this.desiredCurrency = desiredCurrencyValue["mid"];
						}
					}
				}
				let converted = this.convert(this.currency, this.desiredCurrency);
				if (converted !== true) {
					this.CurrencyObjects.desiredCurrencyValue = converted;
					let sumView = new Dom(this.CurrencyObjects);
					sumView.currencyView();
				}
			},
			false
		);
	}
}
