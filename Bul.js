function Jo(){
  const a = parseFloat(document.getElementById('J').value);
  const b = parseFloat(document.getElementById('O').value);
  const c = parseFloat(document.getElementById('N').value);
  const d = parseFloat(document.getElementById('A').value);
  const e = parseFloat(document.getElementById('T').value);
  const f = parseFloat(document.getElementById('H').value);
  const g = parseFloat(document.getElementById('A').value);
  const h = parseFloat(document.getElementById('N').value);
  const i = (a+b+c+d+e+f+g+h)/8;
  const Total = (a+b+c+d+e+f+g+h);

  let Observation;
  if(i <9){
    Observation = '<font color="red">Insuffisant(e)</font>';
  } else if ( i < 12) {
    Observation = '<font color="green">Passable</font>';
  } else if (i < 14) {
    Observation = '<font color="green">Assez-Bien</font>';
  } else if (i < 16) {
    Observation = '<font color="green">Bien</font>';
  } else if (i < 21){
    Observation = '<font color="green">Très Bien</font>'
  }
  document.getElementById("TotalMa").innerHTML = Total + "/160";
  /*Moyenne, Délibération, Mention*/
  document.getElementById("Moyenne1").innerHTML = i +"/20";
 
  document.getElementById("Mention1").innerHTML = Observation;
 
  /* 2 éme Tableau Tableau*/
  document.getElementById("Not1").innerHTML = a + "/20";
  
  document.getElementById("Not2").innerHTML = b + "/20";
  
  document.getElementById("Not3").innerHTML = c + "/20";
  
  document.getElementById("Not4").innerHTML = d + "/20";
  
  document.getElementById("Not5").innerHTML = e + "/20";
  
  document.getElementById("Not6").innerHTML = f + "/20";
  
  document.getElementById("Not7").innerHTML = g + "/20";
  
  document.getElementById("Not8").innerHTML = h + "/20";
  
  document.getElementById("TOT2").innerHTML ="<b>"+Total + "/160" +"</b>";
}