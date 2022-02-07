// function fetchUser(){
//     const input = document.getElementById('name').value
//     console.log(input);
//     fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=e95b351dd39e62db37b40ee6d85001cc`)

//     .then(response =>response.json())
//     .then(data=> {
//         console.log(data)
//         let conta = document.getElementById('container');

//             conta.innerHTML+=`
//             <h5 onclick='takeUser(${data.code})'>State-${(parseInt(data.list[0].main.temp - 273))}</h5>
//             `
//     })

//     .catch(err=> console.log(err))
// }
// fetchUser()
function fetchUser() {
  const input = document.getElementById("name").value;
  let container = document.getElementById("upBlock");
  let container2= document.getElementById("downBlock");
  console.log(input);
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=e95b351dd39e62db37b40ee6d85001cc`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      container.innerHTML = `
            <div  class="weather d-flex">
                   <div id="searcher">
                    <input id="name" type="text" placeholder="Type City or Country you desire to go">
                    <button onclick="fetchUser()">Search</button>
                   </div>
                   <h3 id="city">${input}</h3>
                   <div id="degree" class="d-flex-r"> <i class="fas fa-cloud-sun"></i> <h1 id="gradus">${parseInt(
                     data.list[0].main.temp - 273
                   )}</h1><span id="circle">°</span>  <span id="celc">C</span></div>
                   <h3>${data.list[0].weather[0].description}</h3>
               </div>
               <div  class="wind d-flex">
                   <div class="d-flex-r">
                    <h5>Feels like ${parseInt(
                        data.list[0].main.feels_like- 273
                      )}°</h5>
                    <h5>Wind ${parseInt(data.list[0].wind.speed)} mph </h5>
                    <h5>Pressure ${data.list[0].main.pressure} mbar</h5>
                   </div>
                   <div class="d-flex-r">
                    <h5>Humidity ${data.list[0].main.humidity}%</h5>
                    <h5>Chance of rain 0%</h5>
                    <h5>Chance of rain 0%</h5>
                   </div>
               </div>
            `
            container2.innerHTML = `
            <div class="forecast ">
            <div class="d-flex">
               <h3>${data.list[4].dt_txt}</h3>
               <h2>${input}</h2>
               <h3><i  class="fas fa-cloud-sun"></i>${parseInt(
                data.list[4].main.temp - 273
              )}°</h3>
            </div>
            <div class="d-flex-rs">
                <div>
                    <h5>Feels like ${parseInt(
                      data.list[4].main.temp - 273
                    )}</h5>
                    <h5>Wind ${parseInt(data.list[0].wind.speed)} </h5>
                    <h5>Pressure ${data.list[4].main.pressure}</h5>
                </div>
                <div>
                    <h5>Humidity${data.list[4].main.humidity}%</h5>
                    <h5>Chance of rain 0%</h5>
                    <h5>Chance of rain 0%</h5>
                </div>
            </div>
        </div>
        <div class="forecast ">
            <div class="d-flex">
               <h3>${data.list[13].dt_txt}</h3>
               <h2>${input}</h2>
               <h3><i  class="fas fa-cloud-sun"></i>${parseInt(
                data.list[13].main.temp - 273
              )}°</h3>
            </div>
            <div class="d-flex-rs">
                <div>
                    <h5>Feels like${parseInt(
                      data.list[13].main.temp - 273
                    )}°</h5>
                    <h5>Wind${parseInt(data.list[13].wind.speed)} mph </h5>
                    <h5>Pressure 1007</h5>
                </div>
                <div>
                    <h5>Humidity ${data.list[13].main.humidity}%</h5>
                    <h5>Chance of rain 0%</h5>
                    <h5>Chance of rain 0%</h5>
                </div>
            </div>
        </div>
        <div class="forecast ">
            <div class="d-flex">
               <h3>${data.list[23].dt_txt}</h3>
               <h2>${input}</h2>
               <h3><i  class="fas fa-cloud-sun"></i>${parseInt(
                data.list[23].main.temp - 273
              )}°</h3>
            </div>
            <div class="d-flex-rs">
                <div>
                    <h5>Feels like${parseInt(
                      data.list[23].main.temp - 273
                    )}°</h5>
                    <h5>Wind ${parseInt(data.list[23].wind.speed)}mph </h5>
                    <h5>Pressure 1007</h5>
                </div>
                <div>
                    <h5>Humidity ${data.list[23].main.humidity}%</h5>
                    <h5>Chance of rain 0%</h5>
                    <h5>Chance of rain 0%</h5>
                </div>
            </div>
        </div>
        <div class="forecast ">
            <div class="d-flex">
               <h3>2021-06-07</h3>
               <h2>${input}</h2>
               <h3><i  class="fas fa-cloud-sun"></i>25°</h3>
            </div>
            <div class="d-flex-rs">
                <div>
                    <h5>Feels like 35°</h5>
                    <h5>Wind 5mph </h5>
                    <h5>Pressure 1007</h5>
                </div>
                <div>
                    <h5>Humidity 65%</h5>
                    <h5>Chance of rain 0%</h5>
                    <h5>Chance of rain 0%</h5>
                </div>
            </div>
        </div>
       
       
            `
    })

    .catch((err) => console.log(err));
}
// fetchUser()
