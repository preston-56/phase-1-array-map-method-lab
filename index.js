const titleCased = () => {
  const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
  ];
  const newTutorialList = []
  for(const element of tutorials) {
     const uppercasedString = element.split(' ').map((word) => word.slice(0, 1).toUpperCase() + word.slice(1, word.length) ).join(' ')
     newTutorialList.push(uppercasedString)
  }
  return newTutorialList
}
