let teams = [];
const maxTeams = 4;

function removePlayer(team, playerName) {
  const validTeam = teams[team];
  const player = document.getElementById(playerName);

  if (validTeam && player) {
    player.remove();

    const foundElement = teams[team].indexOf(playerName);
    teams[team].splice(foundElement, 1);

    console.log(teams[team])
  }
}

function removeTeam() {
  const varLength = teams.length + 1
  if (varLength > 1) {
    const teamToRemove = document.getElementById("team" + varLength)
    const foundElement = teams.indexOf('team'+varLength)
  
    teamToRemove.remove()
    teams.splice(foundElement, 1)
  }
}

function addPlayer(team) {
    const playerNameInputId = team + `PlayerName`;
    const playerName = document.getElementById(playerNameInputId).value;

    if (playerName) {
      const playerListId = team + `Players`;
      const playerList = document.getElementById(playerListId);
      const listItem = document.createElement('p');

      const remove = document.createElement('button');
      remove.textContent = 'X';
      remove.id = 'removeButton';

      remove.setAttribute('onclick', "removePlayer('" + team + "','" + playerName + "')");
      
      listItem.textContent = playerName;
      listItem.id = playerName;
      playerList.appendChild(listItem);

      listItem.appendChild(remove);

      document.getElementById(playerNameInputId).value = ''; // Clear input

      if (!teams[team]) {
        teams[team] = [];
      }
  
      teams[team].push(playerName);
      console.log(teams[team]);
    }
}

function updatePoints(team, updateAmount) {
  const pointNameID = team + `points`;
  const pointText = document.getElementById(pointNameID);
  
  if (!teams[team]){
    teams[team] = []
  }

  if (!teams[team]['points']) {
    teams[team]['points'] = 0
  }

  teams[team]['points'] += updateAmount
  console.log(teams[team]['points'])

  pointText.textContent = teams[team]['points']
}

function addTeam() {
  // Add one to properly make team name
  const teamSize = teams.length + 2;
  if (teamSize < maxTeams+1) {
    console.log(teamSize);
    teams.push('team' + teamSize);
  
    const rosters = document.getElementById("teams");
  
    // create children
    const div = document.createElement('div');
    const playerInfo = document.createElement('div');
    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');
    const input = document.createElement('input');
    const button = document.createElement('button');
  
    const pointInfo = document.createElement('div');
    const pointText = document.createElement('h2');
    const pointValue = document.createElement('h2');
  
    pointText.textContent = 'Points:'
    pointValue.textContent = '0'
    pointValue.id = 'team'+teamSize+'points'
  
    // adjust children style
    div.id = 'team' + teamSize;
    h3.textContent = 'Team ' + teamSize.toString();
    ul.id = 'team' + teamSize + 'Players';
  
    input.type = 'text';
    input.id = 'team' + teamSize + 'PlayerName';
    input.placeholder = 'Player Name';
  
    button.setAttribute('onclick', "addPlayer('team" + teamSize.toString() + "');");
    button.textContent = "Add Player";
  
    // append children
    rosters.appendChild(div);
    div.appendChild(playerInfo);
    div.appendChild(pointInfo);
    playerInfo.appendChild(h3);
    playerInfo.appendChild(ul);
    playerInfo.appendChild(input);
    playerInfo.appendChild(button);
    pointInfo.appendChild(pointText)
    pointInfo.appendChild(pointValue)
  }
}