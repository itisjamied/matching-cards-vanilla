function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

//   function displayWinScreen() {
//     setTimeout(() => {
//       alert("Congratulations! You've matched all the cards!");
//     }, 500); // Delay just a bit to let the last match animation finish
//   }
