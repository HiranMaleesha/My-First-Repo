const btnEl = document.getElementById("btn")
const joketxt = document.getElementById("joke")


const apiKey = "yI3t602kvsFgHz1s5Y0qlA==lY3X8TPUEyleVJxu"

const options = {
    method:"Get",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function getJoke(){
    joketxt.innerHTML = "updating...";

    btnEl.disabled = true;
    btnEl.innerHTML = "loading...";
    
    const response = await fetch(apiURL,options)
    const data = await response.json();

    joketxt.innerHTML = data[0].joke;

    btnEl.disabled = false;
    btnEl.innerHTML = "tell me a joke";

    
}


btnEl.addEventListener("click",getJoke)