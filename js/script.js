   async function abc(){
    var city=document.querySelector("#weatherName").value
    if(city==""){
    city="mumbai";
    }
    apik = '3045dd712ffe6e702e3245525ac7fa38';
   var res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apik}`)
    // console.log(res)
   if(res.status==200){
    var data= await res.json();
    console.log(data);
    let Temp=Math.floor(data.main.temp-273);
    document.querySelector(".temp").innerHTML="<h1>Today Temp:"+Temp+"<sup>o</sup>c</h1>";
    document.querySelector(".name").innerHTML=data.name+","+data.sys.country;
    // name=data.name;
    // console.log(name);
    var weather=data.weather[0].main;
    console.log(weather);
document.querySelector("#img").src="img/"+weather+".jpg";

var long="Longitude:"+data.coord.lon+",Latitude:"+data.coord.lat;
console.log(long)
document.querySelector("#long").innerHTML=long;
  let humidity=data.main.humidity;
  console.log(humidity);
  document.querySelector("#humd").innerHTML=humidity+"<sup>o</sup>humidity";
  let speed=data.wind.speed;
  console.log(speed);
  document.querySelector("#speed").innerHTML=speed+"KmperHr";
}
if(res.status==404){
    alert("Invalid City Name");
    console.log("Invalid City Name");
}
if(res.status==401){
    alert("Invalid Api Value");
    console.log("Invalid Api Value");
}

}

// abc();







