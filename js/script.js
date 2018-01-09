function currentDate() {
var date= new Date();
var day= ('0'+date.getDate()).slice(-2);
var month= ('0' +(date.getMonth()+1)).slice(-2);
var year= date.getFullYear();
return year+"-"+month+"-"+day;
}

function requestXML(method, url, func)
{
    var xhr= new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onload= function (ev) {
        if(xhr.readyState===4)
        {
            if(xhr.status===200)
            {
                func(JSON.parse(xhr.response))
            }
            else
            {
                console.log("error: "+ xhr.statusText);
            }
        }
    };
    xhr.onerror= function (e) {
        console.log(xhr.statusText)

    };
    xhr.send()



}

function currencyData(obj) {

   var currency_obj= obj[0]['rates'];
   var currency_data={};
   for(var key in currency_obj)
   {
       if(currency_obj.hasOwnProperty(key))
       {
           currency_data[key]= {
               table: obj[0]['table'],
               name: currency_obj[key]['currency'],
               code: currency_obj[key]['code'],
               mid: currency_obj[key]['mid'],
               date: obj[0]["effectiveDate"]

           };





       }

   }
   var l= Object.keys(currency_data).length-1;
   currency_data[l].name="Polski zloty";
   currency_data[l].code="PLN";
   currency_data[l].mid=1;







   event(currency_data);
   addDomItem(currency_data);
   count(currency_data)


}


function event(data)
{
    var select= document.getElementById("list");
    select.addEventListener("change",function(){
        for(var i=0; i<select.options.length;i++)
        {
            var option= select.options[i];
            if(option.selected)
            {
                getUrl(data,option.value);


            }
        }

    },false);

}

function getUrl(obj, val)
{
   var currnecy_values= {};
   Object.keys(obj).forEach(function(key){  if(obj[key]['name']===val){
       currnecy_values={
       name:obj[key]['name'],
       code:obj[key]['code'],
       table:obj[key]['table'],
       date: obj[key]['date'],
       mid: obj[key]['mid']}  }});
   currencyView(currnecy_values);
  return currnecy_values
}


function addDomItem(arg) {
    var c_lis = [];
    Object.keys(arg).forEach(function (key) {
        c_lis.push(arg[key]['name'])
    });

    var select_list = document.getElementsByClassName("currency_list");
    for (var i = 0; i < c_lis.length; i++) {
        var option = document.createElement("option");
        option.value = c_lis[i];
        option.text = c_lis[i];

        select_list[0].appendChild(option);
        select_list[1].appendChild(option.cloneNode(true));
        select_list[2].appendChild(option.cloneNode(true));



    }
}

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
function count(opt)
{

    var btn= document.querySelector("button");
    var slt= document.getElementById("from");
    var sec= document.getElementById("to");
    var input= document.getElementById("Currencyinput");
    var inputerror= document.getElementById("inputerror");
    btn.addEventListener('click', function(ev){

            for(var i=0; i<slt.options.length;i++)
            {
                var fir_option= slt.options[i];
                var sec_option= sec.options[i];

                if(fir_option.selected )
                {

                 var val= getUrl(opt, fir_option.value);

                 if(typeof val['mid']==='number' )
                 {
                     var f= val['mid'];

                 }


                }
                if(sec_option.selected)
                {
                    var sval= getUrl(opt, sec_option.value);
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
                    console.log(input.value);
                    input.style.border="";
                    inputerror.style.display="none";
                    var sum= Math.round((f*inputint/t)*100)/100;


                }
                else
                {
                    input.style.border="2px solid red";
                    inputerror.style.display="";

                }




            }





    },false)
}


requestXML("GET", "http://api.nbp.pl/api/exchangerates/tables/B/?format=json", currencyData);
requestXML("GET", "http://api.nbp.pl/api/exchangerates/tables/A/?format=json", currencyData);

currencyView();
console.log(currentDate());
