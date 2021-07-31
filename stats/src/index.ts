import {CsvFileReader} from './CsvFileReader'

const reader = new CsvFileReader('football.csv')
reader.read()

let manWins = 0;

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

for(let match of reader.data) {
  if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) manWins++;
  else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin) manWins++;
}

console.log(manWins)
