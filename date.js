var pm=document.getElementById("pmonth");

var pd=document.getElementById("pday");

var pdt=document.getElementById("pdate");

var py=document.getElementById("pyear");

const date=new Date();
const month=date.getMonth();

pm.innerText=date.toLocaleString("te",{
    month:"long"
})

pd.innerText=date.toLocaleString("te",{
    weekday:"long"
})

pdt.innerText=date.getDate();

py.innerText=date.getFullYear();
