import {requestXML} from './requestxml';
import {CurrencyData} from './CurrencyInf';
import {Dom} from './dom';
import '../css/main.scss'

 
function currencyView(data)
{


    var content= document.getElementById("currency_view");

    if(content.children.length>=1)
    {
        content.removeChild(content.childNodes[0]);



    }

    if(typeof data==="object") {
        if(data['code']!==undefined) {


            var header_info = document.createElement("H1");
            var paragraph_info = document.createElement("p");
            var header_text = document.createTextNode(data['name']);
            var paragrpah_text = document.createTextNode(data['code']);


            header_info.appendChild(header_text);
            paragraph_info.appendChild(paragrpah_text);

            content.appendChild(header_info);
            content.appendChild(paragraph_info);


        }


    }

}


requestXML("http://api.nbp.pl/api/exchangerates/tables/B/?format=json").then(function(response) {
  let jsonfile=JSON.parse(response);
  let currencyObjs=  new CurrencyData(jsonfile).getCurrencyValue();
  let domObjs= new Dom(currencyObjs);
  domObjs.event();
  domObjs.addDomElement();
  domObjs.count();
  
  }, function(error) {
    console.error("Failed!", error);
  });
  

  
