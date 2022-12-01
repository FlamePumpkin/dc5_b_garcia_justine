function triChiffre(){
    var chiffre = '5632147890';
    var chiffreTrie = chiffre.split('').sort().join('');
  return chiffreTrie;
  }
  console.log(triChiffre());