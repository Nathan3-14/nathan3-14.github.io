// from random import randint
// from rich.console import Console



// def dice() -> int:
//     return randint(1, 6)

var get_winner = (attack_count, defend_count) => {
    var current_attack_count = attack_count - 1
    var current_defend_count = defend_count


    while (current_attack_count > 0 && current_defend_count > 0) {
        attack_dice_count = min(current_attack_count, 3)
        defend_dice_count = min(current_defend_count, 2)
    
        dprint(f"[bright_red]Attacking with {attack_dice_count} [bold](from {attack_count}-1={current_attack_count})[/bold][/bright_red]", lineskip=3)
        dprint(f"[bright_cyan]Defending with {defend_dice_count} [bold](from {current_defend_count})[/bold][/bright_cyan]")
        
    
    
        attack_dice_rolls = [dice() for roll in range(attack_dice_count)]
        attack_dice_rolls.sort(reverse=True)
        defend_dice_rolls = [dice() for roll in range(defend_dice_count)]
        defend_dice_rolls.sort(reverse=True)
    
        dprint(f"[bright_red]Attack rolled {attack_dice_rolls}[/bright_red]", lineskip=1)
        dprint(f"[bright_cyan]Defence rolled {defend_dice_rolls}[/bright_cyan]")
    
    
        print("") #? Line break to keep debugging consistency ?#
        for index in range(min(attack_dice_count, defend_dice_count)):
            current_attack_roll = attack_dice_rolls[index]
            current_defend_roll = defend_dice_rolls[index]
            dprint(f"[bright_green][bright_red]{current_attack_roll}[/bright_red] vs [bright_cyan]{current_defend_roll}[/bright_cyan][/bright_green] ", end="")
            if current_attack_roll > current_defend_roll:
                current_defend_count -= 1
                print(f"[bright_red bold]Attack wins[/bright_red bold]") #! Are not 'dprint' as they continue from previous print statement !#
            else:
                current_attack_count -= 1
                print(f"[bright_cyan bold]Defend wins[/bright_cyan bold]") #! Are not 'dprint' as they continue from previous print statement !#
        
    
    
        dprint(f"[bright_red]Attack at {current_attack_count}[/bright_red]", lineskip=1)
        dprint(f"[bright_cyan]Defend at {current_defend_count}[/bright_cyan]")
    }
    
    return OutcomeResult(current_attack_count, current_defend_count)
}

