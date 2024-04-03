import inquirer from "inquirer";
// 1)  computer  will generate a random number  done
// 2) uers input for guessing number  done
//3)compere user input with cmputer generated number and show result  
const randomNumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number  between 1-10:",
    },
]);
//console.log(answer);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congtratulation ! you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
