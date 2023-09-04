function convert(){
let from = document.getElementById("from").value;
let to = document.getElementById("To").value;
let m=document.getElementById("message");

//to faharenite
if(from == "CELCIUS" && to == "FAHARENHEIT"){  // C TO F
  let input = document.getElementById("tempcel").value;
  let output = ((input)*1.8)+32;
  document.getElementById("tempfar").value = `${output}°F`;
  m.innerHTML=`${input}°C is equal to ${output}°F`;
}
else if(from == "KELVIN" && to == "FAHARENHEIT"){ //K TO F
    let input = document.getElementById("tempcel").value;
     let output = (((input*1)-273.15)*1.8)+32;
      document.getElementById("tempfar").value = `${output} °F`; 
      m.innerHTML=`${input}°K is equal to ${output}°F`;  
    }

    //to kelvin

else  if(from == "CELCIUS" && to == "KELVIN"){   //  C TO K
    let input = document.getElementById("tempcel").value;
    let output = (input*1)+273.15;
    document.getElementById("tempfar").value = `${output}  °K`;
    m.innerHTML=`${input}°C is equal to ${output}°K`;
  }

  else if(from == "FAHARENHEIT" && to == "KELVIN"){ //F TO K

    let input = document.getElementById("tempcel").value;
      let output = ((input-32)*0.55)+273.15 ;
    document.getElementById("tempfar").value = `${output}  °K`;
    m.innerHTML=`${input}°F is equal to ${output}°K`;
  }

  //to celcius

else if(from == "FAHARENHEIT" && to == "CELCIUS"){ //F TO C

    let input = document.getElementById("tempcel").value;
   let output = ((input-32)*0.55);
    document.getElementById("tempfar").value = `${output}  °C`;
    m.innerHTML=`${input}°F is equal to ${output}°C`;
  }
 else if(from == "KELVIN" && to == "CELCIUS"){ //K TO C

    let input = document.getElementById("tempcel").value;
   let output = (input*1)-273.15;
    document.getElementById("tempfar").value = `${output} °C`;
    m.innerHTML=`${input}°K is equal to ${output}°C`;

  }

// to self

  else  if(from == "KELVIN" && to == "KELVIN"){   //  K TO K  
    let input = document.getElementById("tempcel").value;
    document.getElementById("tempfar").value = `${input} °K`;
      m.innerHTML=`${input}°K is equal to ${input}°K`;
  }
  else  if(from == "CELCIUS" && to == "CELCIUS"){   //  C TO C
    let input = document.getElementById("tempcel").value;
    document.getElementById("tempfar").value = `${input} °C`;
    m.innerHTML=`${input}°C is equal to ${input}°C`;
  }
  else  if(from == "FAHARENHEIT" && to == "FAHARENHEIT"){   //  F TO F

    let input = document.getElementById("tempcel").value;
    document.getElementById("tempfar").value = `${input} °F`;
    m.innerHTML=`${input}°F is equal to ${input}°F`;
  }

}

  function  reset(){
    document.getElementById("tempcel").placeholder="Input";
    document.getElementById("tempfar").placeholder="Output";

    document.getElementById("tempcel").value="";
    document.getElementById("tempfar").value="";

 document.getElementById("from").value="CELCIUS";
 document.getElementById("To").value="FAHARENHEIT";

    }
