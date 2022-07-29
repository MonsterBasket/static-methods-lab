class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z 0-9-']+/g, '');
  }

  static titleize(string){
    let newSentence;
    newSentence = string.split(' ').map((word) => {
    switch(word){
      case 'the':
      case 'a':
      case 'an':
      case 'but':
      case 'of':
      case 'and':
      case 'for':
      case 'at':
      case 'by':
      case 'from':
        return word;
      default:
        return (this.capitalize(word)); //ONLY WORKS in an arrow function!!!
    }
  }).join(' ');
  return this.capitalize(newSentence);
  }
}