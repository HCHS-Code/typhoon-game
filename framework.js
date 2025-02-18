let teams = [];

function addPlayer(team) {
    const playerNameInputId = team + `PlayerName`;
    const playerName = document.getElementById(playerNameInputId).value;

    if (playerName) {
      const playerListId = team + `Players`;
      const playerList = document.getElementById(playerListId);
      const listItem = document.createElement('li');
      
      listItem.textContent = playerName;
      playerList.appendChild(listItem);

      document.getElementById(playerNameInputId).value = ''; // Clear input

      if (!teams[team]) {
        teams[team] = [];
      }
  
      teams[team].push(playerName);
      console.log(teams[team])
    }
}

function addTeam() {
  // Add one to properly make team name
  const teamSize = teams.length + 2
  console.log(teamSize)
  teams.push('team' + teamSize)

  const rosters = document.getElementById("teams");

  // create children
  const div = document.createElement('div');
  const h3 = document.createElement('h3')
  const ul = document.createElement('ul')
  const input = document.createElement('input')
  const button = document.createElement('button')

  // adjust children style
  div.id = 'team-roster'
  h3.textContent = 'Team' + teamSize.toString()
  ul.id = 'team' + teamSize + 'Players'

  input.type = 'text'
  input.id = 'team' + teamSize + 'PlayerName'
  input.placeholder = 'Player Name'

  button.setAttribute('onclick', "addPlayer('team" + teamSize.toString() + "');");
  button.textContent = "Add Player"


  // append children
  rosters.appendChild(div)
  div.appendChild(h3)
  div.appendChild(ul)
  div.appendChild(input)
  div.appendChild(button)
}

// <div class="team-roster">
// <h3>Team 1</h3>
// <ul id="team1Players"></ul>
// <input type="text" id="team1PlayerName" placeholder="Player Name">
// <button onclick="addPlayer('team1')">Add Player</button>
// </div>