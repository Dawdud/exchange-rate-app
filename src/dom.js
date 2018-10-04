
import {CurrencyData} from './CurrencyInf'


export class Dom
{

    constructor(data){

        this.data= data;
        this.optionElement= [];
        this.select_list = document.getElementsByClassName("currency_list");
        this.digit_regex= new RegExp(/^\d+$/);
        this.btn= document.querySelector("button");
        this.slt= document.getElementById("from");
        this.sec= document.getElementById("to");
        this.input= document.getElementById("Currencyinput");
        this.inputerror= document.getElementById("inputerror");
        this.select= document.getElementById("list");

    };
    
   
    event()
    {
        
   
    this.select.addEventListener("change",function(){
        for(let i=0; i<this.select.options.length;i++)
        {
            var option= this.select.options[i];
            if(option.selected)
            {
                
                let url= new CurrencyData(this.data,option.value);
                url.getUrl();
               


            }
        }

    },false);
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

        this.select_list[0].appendChild(option);
        this.select_list[1].appendChild(option.cloneNode(true));
        this.select_list[2].appendChild(option.cloneNode(true));



    }
}
convert( currency_val, converted_val)
 {
    
                if(this.digit_regex.test(this.input.value)) {
                    let inputint= parseInt(this.input.value);
                    let sum= Math.round((currency_val*inputint/converted_val)*100)/100;
                   console.log(sum)
                    

                }
                else
                {
                    this.input.classList.toggle("error");
                    this.inputerror.classList.toggle("isActive");

                }


    }

count()
{

    this.btn.addEventListener('click', (ev)=>{

            for(let i=0; i<this.slt.options.length;i++)
            {
                var fir_option= this.slt.options[i];
                var sec_option= this.sec.options[i];
                
                if(fir_option.selected )
                {

                 var val= new CurrencyData(this.data, fir_option.value).getUrl();

                    if(typeof val['mid']==='number' && typeof val['mid']!='undefined')
                    {
                        var f= val['mid'];

                    }


                }
                if(sec_option.selected)
                {
                    var  sval= new CurrencyData(this.data, sec_option.value).getUrl();
                    
                    if(typeof sval['mid']==='number' && typeof sval['mid']!='undefined')
                    {
                        var t= sval['mid'];
                    }

                }


            }
            
                this.convert(f, t);

            
            

    },false)
}



}




