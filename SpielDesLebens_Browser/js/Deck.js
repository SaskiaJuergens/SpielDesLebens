//Deck-Struktur
const cardDecks = {
  career: [
    { title: "Arzt", salary: 10000, effect: null },
    { title: "Ingenieur", salary: 8000, effect: null },
  ],
  house: [
    { name: "Villa", cost: 500000, upkeep: 1000 },
  ],
  love: [
    { name: "Alex", trait: "Teuer im Unterhalt", cost: 200 },
  ],
  // usw.
};


//Ereigniskarten
function applyEventCard(player, card) {
  if (card.requiresPet && !player.pet) return;
  if (card.type === "loseMoney") player.money -= card.amount;
  if (card.type === "gainMoney") player.money += card.amount;
  // ...
}
