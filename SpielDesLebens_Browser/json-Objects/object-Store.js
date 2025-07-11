const gameState = {
  players: [
    {
      id: 1,
      name: 'Lena',
      money: 100000,
      house: null,
      love: null,
      pet: null,
      career: null,
      cards: {
        houses: [],
        pets: [],
        love: [],
        careers: [],
        events: [],
      }
    },
    // weitere Spieler
  ],
  currentPlayerIndex: 0,
  /*board: [...], // Felder + Typ
  cardDecks: {
    career: [...],
    house: [...],
    love: [...],
    pet: [...],
    event: [...],
  }*/
};
