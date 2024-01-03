let hrs=document.getElementById("hours");
let minute=document.getElementById("minute");
let second=document.getElementById("second");
 setInterval(()=>{
     let current=new Date();
     hrs.innerHTML=(current.getHours()<10?"0":"")+current.getHours();
     minute.innerHTML=(current.getMinutes()<10?"0":"")+current.getMinutes();
     second.innerHTML=(current.getSeconds()<10?"0":"")+current.getSeconds();
 },1000)