module.exports = (blackHand, whiteHand) => {
  let winner = '';
  let winnerCard;
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A'];

    let w = false;
    let b = false;
    blackHand.forEach((e, i) => {
      if(blackHand[i + 1] === undefined || blackHand[i + 1] === undefined && blackHand[i + 2] === undefined) {
      }else if(blackHand[i][0] === blackHand[i + 1][0] && blackHand[i][0] === blackHand[i + 2][0]) {
        b = true;
        winnerCard = blackHand[i][0];
      } else if(blackHand[i][0] === blackHand[i + 1][0]) {
        b = true;
        winnerCard = blackHand[i][0];
      }
    });
    whiteHand.forEach((e, i) => {
      if(whiteHand[i + 1] !== undefined || (whiteHand[i + 1] !== undefined && whiteHand[i + 2] !== undefined)) {
        if(whiteHand[i][0] === whiteHand[i + 1][0] && whiteHand[i][0] === whiteHand[i + 2][0]) {
          w = true;
          winnerCard = whiteHand[i][0];
        } else if(whiteHand[i][0] === whiteHand[i + 1][0]) {
          w = true;
          winnerCard = whiteHand[i][0];
        }
      }
    });
  if(w === true || b ===true){
      if(w) {
        return `White wins! - (Pair: ${winnerCard})`;
      }else {
        return `Black wins! - (Pair: ${winnerCard})`;
      }
  } else {
    if (values.indexOf(blackHand[4][0]) > values.indexOf(whiteHand[4][0])) {
      winner = 'Black';
      winnerCard = blackHand[4][0];
    } else {
      winner = 'White';
      winnerCard = whiteHand[4][0];
    }
    if (winnerCard === 'A'){
      winnerCard = 'Ace';
    }  
    console.log(`${winner} Wins! - (High card: ${winnerCard})`)
    return `${winner} wins! - (High card: ${winnerCard})`;
  }
}
