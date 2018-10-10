export class CurrencyData {
    
    constructor(currencyTableObjects, selectedOptionValue){

        this.currencyTableObjects= currencyTableObjects;
        this.selectedOptionValue= selectedOptionValue;
        this.currencyInformation= {};
        this.currencyObject= this.currencyTableObjects[0]['rates'];
        this.currnecyValues= {};

    }

    getCurrencyValue(){

    
    for(let key in this.currencyObject)
    {
       
            this.currencyInformation[key]= {
                table: this.currencyTableObjects[0]['table'],
                name: this.currencyObject[key]['currency'],
                code: this.currencyObject[key]['code'],
                mid: this.currencyObject[key]['mid'],
                date: this.currencyTableObjects[0]["effectiveDate"]
 
            };
            
 
 
        
 
    }
    let lastCurrency= Object.keys(this.currencyInformation).length-1;
    this.currencyInformation[lastCurrency].name="Polski zloty";
    this.currencyInformation[lastCurrency].code="PLN";
    this.currencyInformation[lastCurrency].mid=1;
    
 
 
   return this.currencyInformation;
}
    getUrl()
{
    
  for(let key in this.currencyTableObjects){  if(this.currencyTableObjects[key]['name']===this.selectedOptionValue){
       this.currnecyValues={
       name:this.currencyTableObjects[key]['name'],
       code:this.currencyTableObjects[key]['code'],
       table:this.currencyTableObjects[key]['table'],
       date: this.currencyTableObjects[key]['date'],
       mid: this.currencyTableObjects[key]['mid']}  }};
     
  return this.currnecyValues
  

} 


 
 }
