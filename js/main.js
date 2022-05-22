//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', dailyNasa);

function dailyNasa (){

    let inputDate = document.querySelector('input').value

    let apiKey = 'Ooh9MvEmhqXSHiU95jfor1qScr3BHwmlXbTIEhGk'

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${inputDate}&`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.querySelector('h2').innerHTML = data.title;
        if (data.media_type === 'image'){
            document.querySelector('img').src = data.hdurl;
        }else if (data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
        }
        
        document.querySelector('h3').innerHTML = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
