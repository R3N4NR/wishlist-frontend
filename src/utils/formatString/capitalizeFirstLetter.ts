export const capitalizeFirstLetter = (word: string)  => {
    const wordSliced = word.slice(1)
    
    const newWord = wordSliced.charAt(0).toUpperCase() + wordSliced.slice(1).toLowerCase();
     return newWord
  }
  
