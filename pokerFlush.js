// Given an array of 5 cards, return true if they are a flush (same suit) and false if not. Format will be ["AS", "3S", "9S", "KS", "4S"].
// Passed array will always be 5 cards 
// Example: Given above array ["AS", "3S", "9S", "KS", "4S"] return true

function isFlush(cards) {
    cards = cards.join("").replace(/[JQKA0-9]/ig, "")
    return cards.split("").every((char) => char === cards[0]);
};

isFlush(["AD", "4S", "7H", "KS", "10S"]) // false