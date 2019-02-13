

import { handler } from "./handler";

export class Dom {
	constructor(data) {
		this.data = data;
		this.optionElement = [];
	}

	currencyView() {
		const content = document.getElementById("currency_view");

		const HeaderDomElement = document.createElement("H1");
		const secondHeaderDomElement = document.createElement("H2");

		const header_text = document.createTextNode(
			this.data["desiredCurrencyValue"]
		);
		const paragrpah_text = document.createTextNode(
			this.data["desiredCurrencyName"]
		);

		HeaderDomElement.appendChild(header_text);
		secondHeaderDomElement.appendChild(paragrpah_text);

		content.appendChild(HeaderDomElement);
		content.appendChild(secondHeaderDomElement);
	}

	addDomElement() {
		for (let key in this.data) {
			this.optionElement.push(this.data[key]["name"]);
		}

		for (let i = 0; i < this.optionElement.length; i++) {
			const option = document.createElement("option");
			option.value = this.optionElement[i];
			option.text = this.optionElement[i];

			handler.SelectList[0].appendChild(option.cloneNode(true));
			handler.SelectList[1].appendChild(option.cloneNode(true));
		}
	}
}
