var dice = () => {
    return Math.floor(Math.random() * 6) + 1; 
}
var range = [1, 2, 3, 4]

function results(attack_rolls, defend_rolls, attack_losses, defend_losses) {
    console.log("resulting")
    var roll_numbers = ["one", "two", "three", "four", "five", "six"]

    var result_div = document.createElement("div")
    result_div.classList.add("result_entry")
    var result_title = document.createElement("h1")
    result_title.innerHTML = `Battle Results`
    var comparison_text = document.createElement("h2")
    comparison_text.innerHTML = "vs"
    var losses = document.createElement("h3")
    losses.innerHTML = `Attack lost ${attack_losses}, Defend lost ${defend_losses}`

    var result_attack_rolls = document.createElement("div")
    for (let i = 0; i<attack_rolls.length; i++) {
        var roll = document.createElement("i")
        roll.classList.add("fa-solid", `fa-dice-${roll_numbers[attack_rolls[i]-1]}`, "dice_roll", "attack")
        result_attack_rolls.append(roll)
    }
    var result_defend_rolls = document.createElement("div")
    for (let i = 0; i<defend_rolls.length; i++) {
        var roll = document.createElement("i")
        roll.classList.add("fa-solid", `fa-dice-${roll_numbers[defend_rolls[i]-1]}`, "dice_roll", "defend")
        result_defend_rolls.append(roll)
    }
    result_div.append(result_title, result_attack_rolls, comparison_text, result_defend_rolls ,losses)
    document.body.append(result_div)
}


var get_winner = (attack_count, defend_count) => {
    var current_attack_count = attack_count - 1
    var current_defend_count = defend_count


    while (current_attack_count > 0 && current_defend_count > 0) {
        console.log()
        console.log()
        attack_dice_count = Math.min(current_attack_count, 3)
        defend_dice_count = Math.min(current_defend_count, 2)

        console.log(`Attacking with ${attack_dice_count} dice`)
        console.log(`Defending with ${defend_dice_count} dice`)
        
    
    
        attack_dice_rolls = Array.from(
            {length: attack_dice_count},
            () => dice()
        );
        attack_dice_rolls.sort((a, b) => b - a)

        defend_dice_rolls = Array.from(
            {length: defend_dice_count},
            () => dice()
        );
        defend_dice_rolls.sort((a, b) => b - a)

        console.log(`Attack rolls ${attack_dice_rolls}`)
        console.log(`Defend rolls ${defend_dice_rolls}`)
    
        
        var attack_losses = 0
        var defend_losses = 0
        for (let index = 0; index < Math.min(attack_dice_count, defend_dice_count); index++) {
            current_attack_roll = attack_dice_rolls[index]
            current_defend_roll = defend_dice_rolls[index]
            if (current_attack_roll > current_defend_roll) {
                console.log(`${current_attack_roll} (attack) vs ${current_defend_roll} (defend) ATTACK WINS`)
                defend_losses += 1
            } else {
                console.log(`${current_attack_roll} (attack) vs ${current_defend_roll} (defend) DEFEND WINS`)
                attack_losses += 1
            }
        }
        current_attack_count -= attack_losses
        current_defend_count -= defend_losses

        results(attack_dice_rolls, defend_dice_rolls, attack_losses, defend_losses)
    }
    
    document.getElementById("attack_count").innerHTML = current_attack_count.toString()
    document.getElementById("defend_count").innerHTML = current_defend_count.toString()
}


var get_winner_with_values = () => {
    get_winner(
        document.getElementById("start_attack_count").value,
        document.getElementById("start_defend_count").value
    )
}