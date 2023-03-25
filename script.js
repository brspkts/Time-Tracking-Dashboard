

function daily(){
    const daily = document.getElementsByClassName("daily");
    for(let i = 0; i < daily.length; i++) {
        daily[i].style.display = "block"
    }
    const weekly = document.getElementsByClassName("weekly");
    for(let b=0; b< weekly.length; b++){
        weekly[b].style.display = "none"
    }
    const monthly = document.getElementsByClassName("monthly");
    for(let c=0; c< monthly.length; c++){
        monthly[c].style.display = "none"
    }
   
}
function weekly(){
    const daily = document.getElementsByClassName("daily");
    for(let i = 0; i < daily.length; i++) {
        daily[i].style.display = "none"
    }
    const weekly = document.getElementsByClassName("weekly");
    for(let b=0; b< weekly.length; b++){
        weekly[b].style.display = "block"
    }
    const monthly = document.getElementsByClassName("monthly");
    for(let c=0; c< monthly.length; c++){
        monthly[c].style.display = "none"
    }
   
}
function monthly(){
    const daily = document.getElementsByClassName("daily");
    for(let i = 0; i < daily.length; i++) {
        daily[i].style.display = "none"
    }
    const weekly = document.getElementsByClassName("weekly");
    for(let b=0; b< weekly.length; b++){
        weekly[b].style.display = "none"
    }
    const monthly = document.getElementsByClassName("monthly");
    for(let c=0; c< monthly.length; c++){
        monthly[c].style.display = "block"
    }
   
}

