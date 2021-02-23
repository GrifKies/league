exports.getTeamFromIndex = function(num) {
  return teams[num];
}

exports.getTeamIndex = function(abbr) {
  for (let i in teams) {
    if (teams[i].abbr == abbr) {
      return Number(i);
    }
  }
}

exports.getTeamFromAbbr = function(abbr) {
  if (abbr == 'CFC') {
    return {abbr:'CFC',mascot:'CFC'};
  } else if (abbr == 'NFC') {
    return {abbr:'NFC',mascot:'NFC'};
  }
  for (let team of teams) {
    if (team.abbr == abbr) {
      return team;
    }
  }
}

var teams = [];
teams[0] = {abbr:'FLA',div:'CFC North',mascot:'Flamingos'}; //cfc north
teams[1] = {abbr:'FOX',div:'CFC North',mascot:'Foxes'};
teams[2] = {abbr:'NAT',div:'CFC North',mascot:'Nationals'};
teams[3] = {abbr:'PEN',div:'CFC North',mascot:'Penguins'};
teams[4] = {abbr:'GRE',div:'CFC South',mascot:'Greats'}; //cfc south
teams[5] = {abbr:'PAN',div:'CFC South',mascot:'Pandas'};
teams[6] = {abbr:'PIR',div:'CFC South',mascot:'Pirates'};
teams[7] = {abbr:'SNA',div:'CFC South',mascot:'Snakes'};
teams[8] = {abbr:'DRA',div:'CFC Central',mascot:'Dragons'}; //cfc central
teams[9] = {abbr:'ENG',div:'CFC Central',mascot:'Engineers'};
teams[10] = {abbr:'PIO',div:'CFC Central',mascot:'Pioneers'};
teams[11] = {abbr:'RED',div:'CFC Central',mascot:'Red Pandas'};
teams[12] = {abbr:'COU',div:'CFC East',mascot:'Cougars'}; //cfc east
teams[13] = {abbr:'FAL',div:'CFC East',mascot:'Falcons'};
teams[14] = {abbr:'GRI',div:'CFC East',mascot:'Grizzlies'};
teams[15] = {abbr:'WAR',div:'CFC East',mascot:'Warriors'};
teams[16] = {abbr:'AAR',div:'CFC West',mascot:'Aardvarks'}; //cfc west
teams[17] = {abbr:'COO',div:'CFC West',mascot:'Coonhounds'};
teams[18] = {abbr:'ROT',div:'CFC West',mascot:'Rottweilers'};
teams[19] = {abbr:'SEN',div:'CFC West',mascot:'Senators'};
teams[20] = {abbr:'BAD',div:'NFC North',mascot:'Badgers'}; //nfc north
teams[21] = {abbr:'HUM',div:'NFC North',mascot:'Hummingbirds'};
teams[22] = {abbr:'LON',div:'NFC North',mascot:'Longhorns'};
teams[23] = {abbr:'WOL',div:'NFC North',mascot:'Wolves'};
teams[24] = {abbr:'AVI',div:'NFC South',mascot:'Aviators'}; //nfc south
teams[25] = {abbr:'CHA',div:'NFC South',mascot:'Chameleons'};
teams[26] = {abbr:'EAG',div:'NFC South',mascot:'Eagles'};
teams[27] = {abbr:'GAL',div:'NFC South',mascot:'Galaxy'};
teams[28] = {abbr:'CHE',div:'NFC Central',mascot:'Cheetahs'}; //nfc central
teams[29] = {abbr:'PEG',div:'NFC Central',mascot:'Pegasi'};
teams[30] = {abbr:'STR',div:'NFC Central',mascot:'Stars'};
teams[31] = {abbr:'ZEB',div:'NFC Central',mascot:'Zebras'};
teams[32] = {abbr:'COL',div:'NFC East',mascot:'Collies'}; //nfc east
teams[33] = {abbr:'HUS',div:'NFC East',mascot:'Huskies'};
teams[34] = {abbr:'LYN',div:'NFC East',mascot:'Lynx'};
teams[35] = {abbr:'STA',div:'NFC East',mascot:'Stallions'};
teams[36] = {abbr:'GOL',div:'NFC West',mascot:'Goldens'}; //nfc west
teams[37] = {abbr:'REB',div:'NFC West',mascot:'Rebels'};
teams[38] = {abbr:'SHA',div:'NFC West',mascot:'Sharks'};
teams[39] = {abbr:'SQU',div:'NFC West',mascot:'Squirrels'};
