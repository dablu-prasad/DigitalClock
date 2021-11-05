 //console.log(a);
 let time;
 let dat;
 let a;
 const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 setInterval(() => {
  a=new Date();
     date=a.toLocaleDateString(undefined,options);
  time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
  document.getElementById('clock').innerHTML=time + " on <br>" +date;
 }, 1000);