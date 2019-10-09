// var req = new XMLHttpRequest();
// console.log("made it into table.js");
// var url = '/scores';
// req.open('GET', url, true);
// req.addEventListener('load', onLoad);
// req.addEventListener('error', onError);
//
// req.send();
//
// function onLoad() {
//   console.log("made it into onLoad function");
//   const players; = JSON.parse(this.responseText);
//   console.log(players);
//   let output;
//   let count = 1;
//   players.forEach((item) => {
//     console.log("made it into players.forEach");
//     output = `<td>${count}</td>
//               <td>${item.name}</td>
//               <td>${item.wins}</td>
//               <td>${item.totalPoints}</td>`
//     document.getElementById(count).innerHTML = output;
//     count++;
//   })
// }



document.getElementById('updateTable').addEventListener('click', (e) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', '../players.json', true);
  xhr.onload = function () {
    if (this.status === 200) {

      const players = JSON.parse(this.responseText);
      console.log(players);
      players.sort((a, b) => b.totalPoints - a.totalPoints);

      console.log(players);
      let output;
      let count = 1;
      players.forEach((player) => {
        output = ` <td>${count}</td>
                   <td>${player.name}</td>
                   <td>${player.week1}</td>
                   <td>${player.week2}</td>
                   <td>${player.week3}</td>
                   <td>${player.week4}</td>
                   <td>${player.week5}</td>
                   <td>${player.totalPoints}</td>`
        document.getElementById(count).innerHTML = output;
        count++;
      })
    }
  }
  xhr.send();
});
//
//
// class Player {
//   constructor(name) {
//     place = 0;
//     this.name = name;
//     weekPoints = 0;
//     wins = 0;
//     totalPoints = 0;
//   }
//
//   setPlace(place) {
//     this.place = place;
//   }
//
//   setWeekPoints(weekPoints) {
//     this.weekPoints = weekPoints;
//   }
//
//   setWins(wins) {
//     this.wins = wins;
//   }
//
//   setTotalPoints(totalPoints) {
//     this.totalPoints = totalPoints;
//   }
//
//   sortbyPoints(players) {
//
//   }
// }
//
// class UI {
//
// }
//
//
// // localStorage class
// class Store {
//
// }
