
function rollDice(){
    const numDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const totalValueDisplay = document.getElementById("totalValueDisplay");
    const values = [];
    const images = [];
    let totalValue = 0;

    for(let i = 0; i < numDice;i++){
        //For each dice, get random value from 1-6
        const value = Math.floor(Math.random() * 6) + 1;
        //Adding value of dice to values array
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);
        totalValue += value;
    }
    //Numeric representation of values rolled
    diceResult.textContent = `Dice Values: ${values.join(",  ")}`;

    if(numDice>1){
        //Total value of dice, remember to display numerical value in the paragraph section
    totalValueDisplay.textContent = `Total Value: ${totalValue}`;
        //using in line css to have a visible Total dice value display box only when there is over 1 dice
    document.getElementById("totalValueDisplay").style.cssText = "background-color = rgb(240, 163, 135); height:80px; border:1px solid rgb(240, 163, 135);";
    }else{
        //Dont display total sum if theres only 1 dice, and delete text from previous iterations of multiple dice
        totalValueDisplay.textContent = ``;
        //In line css to reset to 1 dice display values
        document.getElementById("totalValueDisplay").style.cssText="background-color:lightblue; border-color:lightblue; height=0;"
    }
    //Visual representaiton of dice values
    diceImages.innerHTML = images.join('');
}