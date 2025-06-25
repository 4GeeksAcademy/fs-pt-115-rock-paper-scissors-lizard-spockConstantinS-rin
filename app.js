const game =["rock", "paper", "scissors","lizard", "spock"];

const pcChoice= Math.floor(Math.random()*game.length);


console.log("El PC elige:"+game[pcChoice]);

const startGame = (playerChoice) =>{
  
    if (!juego.includes(playerChoice)) 
    {
        return console.log("What are doin´ ?")    
    }
    else if (
        (playerChoice === "rock" && (game[pcChoice]==="scissors" || game[pcChoice]==="lizard")) ||
        (playerChoice === "paper" && (game[pcChoice]==="rock" || game[pcChoice]==="spock")) ||
        (playerChoice === "scissors" && (game[pcChoice]==="paper" || game[pcChoice]==="lizard")) ||
        (playerChoice === "lizard" && (game[pcChoice]==="spock" || game[pcChoice]==="paper")) ||
        (playerChoice === "spock" && (game[pcChoice]==="scissors" || game[pcChoice]==="rock"))  
    )
    {
        console.log("You Win!!!");
    }

    else if(playerChoice===game[pcChoice])
    {
        console.log("Draw !!!");
    }
    else 
    {
        console.log("You Lose!!!");
    }
    console.log("You choose:", playerChoice);
}

startGame("paper");
