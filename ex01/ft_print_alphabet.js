function trierAlphabet(){
    let alphabet = 'azertyuiopmlkjhgfdsqwxcvbn';
    let alphabetTri = alphabet.split('').sort().join('');

  
  console.log(alphabetTri); // Affiche : abcdefghijklmnopqrstuvwxyz
  return alphabetTri;  

}

trierAlphabet()