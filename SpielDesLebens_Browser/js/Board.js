function renderBoard(board) {
  const boardEl = document.getElementById("game-board");
  boardEl.innerHTML = "";
  board.forEach(field => {
    const tile = document.createElement("div");
    tile.className = `field ${field.type}`; // z.B. "career", "house", etc.
    tile.innerText = field.label;
    boardEl.appendChild(tile);
  });
}
