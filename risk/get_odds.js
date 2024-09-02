var get_winner_for_probabilities = (attack_count, defend_count) => {
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

    }

    var winner
    if (current_defend_count == 0) {
        winner = "attack"
    } else {
        winner = "defend"
    }

    return winner
}

var get_probabilities = () => {
    try {
        var attack_wins = 0
        for (let x=0; x<1000; x++) {
            var winner = get_winner_for_probabilities(
                document.getElementById("start_attack_count").value,
                document.getElementById("start_defend_count").value
            )
            console.info(winner)
            if (winner == "attack") {
                attack_wins++
            }
            console.log("taking action")
        }
        console.log("done")
        attack_win_probability = attack_wins / 10
        document.getElementById("win_probability").innerHTML = `<span class="attack">Attack</span> has a ~${attack_win_probability}% chance of winning`
    } catch {
        document.getElementById("win_probability").innerHTML = "An error occured while calculating the probabilities"
    }
}

