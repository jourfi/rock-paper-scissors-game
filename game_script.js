function computerplay() {
    var x = Math.floor(Math.random() * 3);
    switch (x) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";

    }
};


var user = 0;
var computer = 0;

function playRound(PlayerSelection, computerSelection) {
    PlayerSelection = PlayerSelection.toUpperCase();
    PlayerSelection = PlayerSelection.trim();
  

    if (PlayerSelection == "ROCK") {
        switch (computerSelection) {
            case 'ROCK':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log("Tie!");
                break;
            case 'PAPER':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log(" COMPUTER WINS!");
            computer = computer + 1;
                break;
            case 'SCISSORS':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log(" USER WINS!");
                user = user + 1;
                break;
        }
    }
    if (PlayerSelection == "PAPER") {
        switch (computerSelection) {
            case 'PAPER':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log("Tie!");

                break;
            case 'ROCK':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log(" USER WINS!");
                user = user + 1;
                break;
            case 'SCISSORS':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log(" COMPUTER WINS!");
                computer = computer + 1;
                break;
        }
    }

    if (PlayerSelection == "SCISSORS") {
        switch (computerSelection) {
            case 'SCISSORS':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log("= Tie!");
                break;
            case 'ROCK':
                console.log(" USER : ", PlayerSelection);
                console.log("COMPUTER : ", computerSelection);
                console.log(" COMPUTER WINS!");
                computer = computer + 1;
                break;
            case 'PAPER':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log(" USER WINS!");
                user = user + 1;
                break;
        }
    }

}



for (let i = 0; i < 5; i++) {
  
    const computerSelection = computerplay();
    
    const PlayerSelection = prompt("Enter Paper or Rock or Scissors : ");
    console.log(playRound(PlayerSelection, computerSelection));
    if (PlayerSelection !== 'ROCK' && PlayerSelection !== 'PAPER' && PlayerSelection !== 'SCISSORS') {
        console.log("ERROR");
        break;
       
    
       } ;
    if (i == 4) {
        if (computer > user) {
            alert(" COMPUTER WINS   COMPUTER : " + computer + "  USER : " + user);
        };
        if (user > computer) {
            alert("USER WINS   USER : " + user + "  COMPUTER : " + computer);
        };
        if (user == computer) {
            alert("TIE!   USER : " + user + "  COMPUTER : " + computer);
        };

    }
};