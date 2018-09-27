function takeANumber(lineOfPeople, newName) {
  let peopleInLine = [];
  for (let i = 0; i < lineOfPeople.length; i++){
    const currentLineNumber = lineOfPeople[i];
    peopleInLine.push(currentLineNumber);
  }
  return peopleInLine;
}