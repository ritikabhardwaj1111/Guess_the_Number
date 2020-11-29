function numGuess(){
    let num = document.getElementById("number").value;
    var checkNum = Math.floor(Math.random()*10);

if(checkNum == num)
{
  document.getElementById("result").innerHTML= "Hurray..! The number is "+checkNum;
      document.getElementById("result").style.backgroundColor = "green";
}
else{
    document.getElementById("result").innerHTML= "Try again ! The number is "+checkNum;
        document.getElementById("result").style.backgroundColor = "red";
}

}
