function solveProblem(name1, computer, select1, computerSelect) {
    let winner, winnerSelection, looserSelection
    // compare what is it that every player throws and see who is the winner
    if (select1 === 'rock' && (computerSelect === 'scissors' || computerSelect === 'lizard')) {
        //player1 wins! Computer looses
        winner = name1
        winnerSelection = select1
        looserSelection = computerSelect
    } else if (select1 === 'scissors' && (computerSelect === 'paper' || computerSelect === 'lizard')) {
        //player1 wines! computer looses
        winner = name1
        winnerSelection = select1
        looserSelection = computerSelect
    } else if (select1 === 'paper' && (computerSelect === 'rock' || computerSelect === 'spock')) {
        winner = name1
        winnerSelection = select1
        looserSelection = computerSelect
    } else if (select1 === 'lizard' && (computerSelect === 'paper' || computerSelect === 'spock')) {
        winner = name1
        winnerSelection = select1
        looserSelection = computerSelect
    } else if (select1 === 'spock' && (computerSelect === 'scissors' || computerSelect === "rock")) {
        winner = name1
        winnerSelection = select1
        looserSelection = computerSelect
    } else if (select1 === computerSelect) {
        //there is a tie!
        winner = "none"
        winnerSelection = 'nothing'
        looserSelection = 'nothing'
    } else {
        //computer won
        winner = computer
        winnerSelection = computerSelect
        looserSelection = select1
    }

    //WHAT FOLLOWS SHOULD NOT BE MODIFIED
    return (result = { winner, winnerSelection, looserSelection })
}
