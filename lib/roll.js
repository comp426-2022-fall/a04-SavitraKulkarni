export function roll(sides, numDice, numRolls) {

    var ending = []

    for(let i = 0; i < numRolls; i++) {
        let total = 0

        for(let j = 0; j < numDice; j++) {

            total = total + Math.floor(Math.random() * sides) + 1;
        }
        ending.push(total);
    }
    return {"sides": sides, "dice": numDice, "rolls": numRolls, "results": ending};
}