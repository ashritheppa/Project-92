function addUser(){
    var player_1 = document.getElementById("player1_name_input").value;
    var player_2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);
    window.location ="game_page.html";
}
function send(){
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);
}
question_number = "<h4>" + number1 + "X"+ number2 +"</h4>";
input_box = "<br>Answer : <input type='text id='input_check_box'>";
check_button = "<br><br>button class='btnbtn-info' onclick = 'check()'>Check</button>";
row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
question_turn = "player1";
answer_turn = "player2";
function check() {
get_answer = document.getElementById("input_check_box").value;
if(get_answer == actual_answer)

}