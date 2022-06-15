const submitbtn=document.getElementById('submitbtn');
const cityname=document.getElementById('city');
const temp = document.getElementById('temp');
const temp_status= document.getElementById('temp status');
const city_name=document.getElementById('cityname');

const getinfo = async(event)=>{
    event.preventDefault();
    let cityval = cityname.value
    if(cityval===""){
       city_name.innerText='please write name before search'
    }
    else{                            
        try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid={b178988018463e93176e469dff21fdd8}`
      const response=await fetch(url);
      const data =await response.json();
      const arrData=[data];
      city_name.innerText= arrData[0].name;
      temp.innerText=arrData[0].main.temp;
    temp_status.innerText=arrData[0].weather[0].main;

}
        catch{
            city_name.innerText='please write name properly';

            
        }

    }

}



submitbtn.addEventListener('click',getinfo);