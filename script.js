let cell = document.querySelectorAll('#cellIndex');
let turn_button = document.getElementById('turn_button');
let status_text = document.getElementById('status_text');
player1 = true;
player2 = false;
running = false;

ticked_value = ['','','','','','','','',''];
win_condition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
initializedGame();
function initializedGame(){
    cell.forEach(cell => cell.addEventListener("click", cell_Clicked));
    running = true;
    status_text.innerHTML = "X's turn";
}
function cell_Clicked(){
    let ticked_index = this.getAttribute("cellIndex");
    if(ticked_value[ticked_index] == '' && running == true){
        if(player1 == true){
            ticked_value[ticked_index] = 'X';
            this.innerHTML = "<img src=\"image_X.png\" width=\"80px\" height=\"80px\">";
            player1 = false;
            player2 = true;
            status_text.innerHTML = "O's turn";
        }
        else{
            ticked_value[ticked_index] = 'O';
            this.innerHTML = "<img src=\"image_Y.png\" width=\"80px\" height=\"80px\">";
            player1 = true;
            player2 = false;
            status_text.innerHTML = "X's turn";
        }
        win_check();
    }
    else{
        return;
    }

    
}
function win_check(){
    for(let i = 0; i < win_condition.length; i++){
        let current_val = win_condition[i];
        let room1 = ticked_value[current_val[0]];
        let room2 = ticked_value[current_val[1]];
        let room3 = ticked_value[current_val[2]];

        if(room1 == room2 && room2 == room3 && room1 != ""){
            //if(current_val[1]-current_val[0] == 1){

            //}
            for(let j = 0; j < 3; j++){
            num = current_val[j] + 1
            document.querySelector('.grid-container :nth-child('+ num.toString()+')').style.background = "#E6B446";
            }
            status_text.textContent = `${room1} wins!!!`;
            running = false;
            return;
        }
    }
}

function restart(){
    ticked_value = ['','','','','','','','',''];
    
    for(let j = 0; j < 9; j++){
        cell[j].textContent = "";
        cell[j].style.background = "transparent";
    }
    initializedGame();
}