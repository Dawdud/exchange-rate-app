import {requestXML} from './requestxml';
import {CurrencyData} from './CurrencyInf';
import {Dom} from './dom';
import {Conversion} from './conversion'
import '../css/main.scss'

 
requestXML("http://api.nbp.pl/api/exchangerates/tables/A/?format=json").then(function(response) {
  let jsonfile=JSON.parse(response);
  let currencyObjs=  new CurrencyData(jsonfile).getCurrencyValue();
  let domObjs= new Dom(currencyObjs);
  let conversion= new Conversion(currencyObjs);
  
  domObjs.addDomElement();
  
  conversion.count();


  
  }, function(error) {
    console.error("Failed!", error);
  });
  

  
