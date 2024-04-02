// let a="47d5f9218881cfc9a842f115a6d86dc6";
// let b="47d5f9218881cfc9a842f115a6d86dc6"
// let c="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"

// let v="https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}"
// let v1="https://api.openweathermap.org/data/2.5/weather?q=${delhi}&appid=${47d5f9218881cfc9a842f115a6d86dc6}"



let input=document.getElementById("in")
let btn=document.getElementById("btn1")
let temp=document.getElementById("tp")
let hum=document.getElementById("p")

let img=document.getElementById("i1")

let des=document.getElementById("ty")
// console.log(des)

// console.log(input)
// console.log(btn)
// console.log(temp)
// console.log(hum)


let details= async(city)=>{
    let b=`47d5f9218881cfc9a842f115a6d86dc6`
    let v=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${b}`
    // console.log(city)
let w1= await fetch(v)
// console.log(w1)

let w2=await w1.json()
console.log(w2)
console.log(w2.main.temp)
console.log(w2.main.humidity)
temp.innerHTML=`${(Math.round(w2.main.temp))-273} <sup>o</sup>c`
hum.innerHTML=`${w2.main.humidity}%`
des.innerHTML=`${w2.weather[0].main}`


switch (w2.weather[0].main) {
    case `Haze`:
        img.src=`haze.png`
        break;
        case `Clouds`:
            img.src=`./cloud.png`
            break;
            case `Rainy`:
        img.src=`rainy.png`
        break;
        case `Clear`:
        img.src=`./clear.png`
        break;
    // default:
    //     break;
}

}

btn.addEventListener("click",()=>
                        {details(input.value)
                         
                        }
                    )
