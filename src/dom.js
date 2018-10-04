
import {CurrencyData} from './CurrencyInf'


export class Dom
{

    constructor(data){
        this.data= data;
        this.optionElement= [];
        this.select_list = document.getElementsByClassName("currency_list");

    };

    event()
    {
        
    var select= document.getElementById("list");
    select.addEventListener("change",function(){
        for(let i=0; i<select.options.length;i++)
        {
            var option= select.options[i];
            if(option.selected)
            {
                
                let url= new CurrencyData(this.data,option.value);
                url.getUrl();
               


            }
        }

    },false);
}

addDomItem() {
   
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
count()
{

    var btn= document.querySelector("button");
    var slt= document.getElementById("from");
    var sec= document.getElementById("to");
    var input= document.getElementById("Currencyinput");
    var inputerror= document.getElementById("inputerror");
    btn.addEventListener('click', (ev)=>{

            for(let i=0; i<slt.options.length;i++)
            {
                var fir_option= slt.options[i];
                var sec_option= sec.options[i];
                
                if(fir_option.selected )
                {

                 var val= new CurrencyData(this.data, fir_option.value).getUrl();

                    if(typeof val['mid']==='number' )
                    {
                        var f= val['mid'];

                    }


                }
                if(sec_option.selected)
                {
                    var  sval= new CurrencyData(this.data, sec_option.value).getUrl();
                    
                    if(typeof sval['mid']==='number')
                    {
                        var t= sval['mid'];
                    }

                }


            }
            if(typeof f!== 'undefined' && typeof  t!== 'undefined')
            {
                var re= new RegExp(/^\d+$/);

                if(re.test(input.value)) {
                    var inputint= parseInt(input.value);
            
                    input.style.border="";
                    inputerror.style.display="none";
                    var sum= Math.round((f*inputint/t)*100)/100;
                    console.log(sum);
                    
                    


                }
                else
                {
                    input.style.border="2px solid red";
                    inputerror.style.display="";

                }




            }





    },false)
}



}




