// Given a string, return a new string where every letter is replace by ten letters forward in the alphabet. If it will go past z, wrap around the alphabet and start at a again.
// Input will always be a valid string
// Example: Given ("abc") return klm

function ceasarCipher(s){
    return s.split('').map(e => e.charCodeAt(0) + 10 > 122 
                        ? String.fromCharCode(e.charCodeAt(0) - 16) 
                        : String.fromCharCode(e.charCodeAt(0) + 10)).join('');
};

ceasarCipher("hello there") // returns rofyc*bxro