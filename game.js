player1name=localStorage.getItem("Player1name")
document.getElementById("player1name").innerHTML=player1name
player2name=localStorage.getItem("Player2name")
document.getElementById("player2name").innerHTML=player2name
player1score=0
player2score=0
document.getElementById("player1_score").innerHTML=player1score
document.getElementById("player2_score").innerHTML=player2score
document.getElementById("player_que").innerHTML="Question turn: "+player1name
document.getElementById("playe_ans").innerHTML="Answer turn: "+player2name

function send(){
   number1= document.getElementById("no").value
   number2= document.getElementById("no2").value
   actualans= parseInt(number1) * parseInt(number2)
   questionno="<h4>"+number1+"X"+number2+"</h4>"
   inputbox= "<br>ANSWEr : <input type='text' id='inputcheckbox'>"
   checkbutton="<br><br><button class='btn btn-info' onclick='check()'>check</button>"
   row=questionno+inputbox+checkbutton
   document.getElementById("output").innerHTML=row
   document.getElementById("number1").value=""
   document.getElementById("number2").value=""
}