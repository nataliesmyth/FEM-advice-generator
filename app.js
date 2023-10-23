const quote = document.querySelector('#quote')
const adviceId = document.querySelector('#adviceId');
const reload = document.querySelector('#reload')
async function FetchData(){
    var response = await fetch("https://api.adviceslip.com/advice", {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
      });
    let json = await response.json();
    console.log(json);
    adviceId.innerText = `${json.slip.id}`;
    console.log(adviceId)
    quote.innerText = `"${json.slip.advice}"`;
}

FetchData();

reload.addEventListener('click', FetchData);