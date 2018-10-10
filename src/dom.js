import {CurrencyData} from './CurrencyInf';
import {Conversion} from './conversion'
import {handler} from './handler'

export class Dom
{

    constructor(data){

        this.data= data;
        this.optionElement= [];
        

    };
    
   
    event()
    {
        
   
    handler.select.addEventListener("change",function(){
        for(let i=0; i<handler.select.options.length;i++)
        {
            var option= handler.select.options[i];
            if(option.selected)
            {
                
                let url= new CurrencyData(this.data,option.value);
                url.getUrl();
               


            }
        }

    },false);
}

currencyView()
{

    
    var content= document.getElementById("currency_view");

    
    var HeaderDomElement = document.createElement("H1");
    var secondHeaderDomElement = document.createElement("H2");
    
    
    var header_text = document.createTextNode(this.data['desiredCurrencyValue']);
    var paragrpah_text = document.createTextNode(this.data['desiredCurrencyName']);


    HeaderDomElement.appendChild(header_text);
    secondHeaderDomElement.appendChild(paragrpah_text);

    content.appendChild(HeaderDomElement);
    content.appendChild(secondHeaderDomElement);


        


    

}

addDomElement() {
   
    for(let key in this.data)
    {
        this.optionElement.push(this.data[key]['name'])
    }

    
    for (let i = 0; i < this.optionElement.length; i++) {
        var option = document.createElement("option");
        option.value = this.optionElement[i];
        option.text = this.optionElement[i];

        handler.SelectList[0].appendChild(option);
        handler.SelectList[1].appendChild(option.cloneNode(true));
        handler.SelectList[2].appendChild(option.cloneNode(true));



    }
}

}




