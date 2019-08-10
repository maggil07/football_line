// document.getElementById('updateTable').addEventListener('click', (e) => {
//   const xhr = new XMLHttpRequest();
//
//   xhr.open('GET', 'players.json', true);
//   xhr.onload = function () {
//     if (this.status === 200) {
//
//       const players = JSON.parse(this.responseText);
//       let output;
//       players.forEach((player) =>{
//         output = `<td>${player.name}</td>
//                    <td>${player.wins}</td>
//                    <td>${player.totalPoints}</td>`
//         document.getElementById(`${player.id}`).innerHTML = output;
//       })
//     }
//   }
//   xhr.send();
// });


class Player {
  constructor(name) {
    place = 0;
    this.name = name;
    weekPoints = 0;
    wins = 0;
    totalPoints = 0;
  }

  setPlace(place) {
    this.place = place;
  }

  setWeekPoints(weekPoints) {
    this.weekPoints = weekPoints;
  }

  setWins(wins) {
    this.wins = wins;
  }

  setTotalPoints(totalPoints) {
    this.totalPoints = totalPoints;
  }
}

class UI {

}
