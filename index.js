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

/*

  describe( "titleize", () => {
    it( "is a static method", () => {
      expect( Formatter.titleize( "F forever foolish" ) ).to.not.throw
    } )

    it( "capitalizes all words in a sentence except 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'", () => {
      expect( Formatter.titleize( "getting giggles" ) ).to.equal( "Getting Giggles" )
      expect( Formatter.titleize( "where the wild things are" ) ).to.equal( "Where the Wild Things Are" )
      expect( Formatter.titleize( "chicken soup with rice and a few other songs" ) ).to.equal( "Chicken Soup With Rice and a Few Other Songs" )
      expect( Formatter.titleize( "Maurice a an but of and for at by from end" ) ).to.equal( "Maurice a an but of and for at by from End" )
    } )

    it( "always capitalizes the first word", () => {
      expect( Formatter.titleize( "a tale of two cities" ) ).to.equal( "A Tale of Two Cities" )
      expect( Formatter.titleize( "in the night kitchen" ) ).to.equal( "In the Night Kitchen" )
    } )
  } )
} )*/