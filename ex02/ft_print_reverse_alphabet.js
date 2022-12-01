function trierAlphabet(){
    let alphabet = 'azertyuiopmlkjhgfdsqwxcvbn';
    let alphabetTri = alphabet.split('').sort().reverse('').join('');

  
  console.log(alphabetTri);
  return alphabetTri;  

}

trierAlphabet()