export class CurrencyData {
    
    constructor(obj, val){

        this.obj= obj;
        this.val= val;
        this.currency_data= {};
        this.currency_obj= this.obj[0]['rates'];
        this.currnecy_values= {};

    }

    getCurrencyValue(){

    
    for(let key in this.currency_obj)
    {
       
            this.currency_data[key]= {
                table: this.obj[0]['table'],
                name: this.currency_obj[key]['currency'],
                code: this.currency_obj[key]['code'],
                mid: this.currency_obj[key]['mid'],
                date: this.obj[0]["effectiveDate"]
 
            };
            
 
 
        
 
    }
    let l= Object.keys(this.currency_data).length-1;
    this.currency_data[l].name="Polski zloty";
    this.currency_data[l].code="PLN";
    this.currency_data[l].mid=1;
    
 
 
   return this.currency_data;
}
    getUrl()
{
    
  for(let key in this.obj){  if(this.obj[key]['name']===this.val){
       this.currnecy_values={
       name:this.obj[key]['name'],
       code:this.obj[key]['code'],
       table:this.obj[key]['table'],
       date: this.obj[key]['date'],
       mid: this.obj[key]['mid']}  }};
       
  return this.currnecy_values
  

} 
 
 
 }
