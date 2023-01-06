let result = document.getElementById('button')
result.addEventListener('click',

    async function foo() {
try{
        let cityname = document.getElementById('cityName').value
        console.log(cityname);
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=ec923079cea8a2b6ed1d34b3d72c5702`)
        let res = await data.json();
        console.log(res)

        let output = document.getElementById('weather')
        output.innerHTML = `  <div class="col-sm-6 mx-auto m-0 p-0">
         <div class="card  mr-2  ">
            <div class="row g-0">
                 <div class="col-md-4">
                     <img src="https://static01.nyt.com/images/2014/12/11/technology/personaltech/11machin-illo/11machin-illo-superJumbo-v3.jpg"
                         class="img-fluid rounded-start  " alt="weather image">
                </div>
                <div class="col-md-8 ">
                    <div id =" weatherDetails" class= "card-body">
                        <h5  card-tittle >Weather data of ${cityname}</h5>
                        <hr>     
                       <p class="card-text"><small class="text-muted"> Clouds :${res.clouds.all} </small> </p>
                    
                       <p class="card-text"><small class="text-muted"> Wind speed : ${res.wind.speed} </small> </p>
                    
                       <p class="card-text"><small class="text-muted"> Time zone :${res.timezone} </small> </p>
                       <p class="card-text"><small class="text-muted"> Temprature :${res.main.temp} </small> </p>
             
                       <p class="card-text"><small class="text-muted"> humidity :${res.main.humidity} </small> </p>
             
                    </div>
                 </div>
             </div>
         </div>`
        }
        catch(err){
            alert("Invalid input")
        }
    })