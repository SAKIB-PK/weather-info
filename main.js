let api_key = `492c5bcb455c4e941c36e9a877d551cf`
let searchBtn = document.getElementById('searchBtn')



// fetch api data
let fetchData =()=>{
    let city_value =document.getElementById('searchInput').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_value}&appid=${api_key}&units=metric`).then(e=>e.json()).then(res => {
        displayData(res)
        console.log(res);
    })

}
// addd eventListner
searchBtn.addEventListener('click',fetchData)
//display data
let displayData = res =>{
    setInnerText('city',res.name)
    setInnerText('temp',res.main.temp)
    setInnerText('weather',res.weather[0].main)
    // set icon 
    
    document.getElementById('icon').src =`https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`

}
// set InnerText to The UI
let setInnerText =(city,name)=>{
    document.getElementById(city).innerText = name
}