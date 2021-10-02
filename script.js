fetch("https://api.covid19api.com/summary")
.then((data)=>{
    return data.json();
})
.then((actualData)=>{
  const data=actualData.Countries[76];
  console.log(data);
  document.getElementById("country").innerHTML= `<u>Country</u> : ${data.Country}`;
  document.getElementById("newCases").innerHTML= `<u>New Cases</u> : ${data.NewConfirmed}`;
  document.getElementById("totalCases").innerHTML= `<u>Total Cases</u> : ${data.TotalConfirmed}`;
  document.getElementById("totalRecovered").innerHTML=`<u>Total Recovered</u> : ${data.TotalRecovered}`;
  document.getElementById("newDeaths").innerHTML=`<u>New Deaths</u> : ${data.NewDeaths}`;
  document.getElementById("totalDeaths").innerHTML=`<u>Total Deaths</u> : ${data.TotalDeaths}`;
  document.getElementById("date").innerHTML=`<u>Date</u> : ${data.Date}`;
  

}).catch((error)=>{

    console.log("error");

})