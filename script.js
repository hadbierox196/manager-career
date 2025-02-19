
// script.js
const outcomes = [
  "League Title",
  "League Cup",
  "Champions League",
  "Domestic Treble",
  "European Treble",
  "League Title and League Cup",
  "League Cup and Champions League",
  "Champions League and League Title",
  "Trophyless",
  "Resign",
  "Sacked"
];

const teams = [
  "Real Madrid", "Barcelona", "Liverpool", "Manchester City", "Bayern Munich",
  "Paris Saint-Germain", "Juventus", "Chelsea", "Atletico Madrid", "Inter Milan",
  "Tottenham Hotspur", "Arsenal", "AC Milan", "Napoli", "Borussia Dortmund",
  "RB Leipzig", "Porto", "Benfica", "Ajax", "Sevilla", "Roma", "Lazio",
  "Shakhtar Donetsk", "Galatasaray", "Fenerbahce", "Flamengo", "River Plate",
  "Boca Juniors", "Celtic", "Rangers", "Zenit St. Petersburg", "Spartak Moscow"
];

const leagueNames = {
  "Real Madrid": "La Liga",
  "Barcelona": "La Liga",
  "Liverpool": "Premier League",
  "Manchester City": "Premier League",
  "Bayern Munich": "Bundesliga",
  "Paris Saint-Germain": "Ligue 1",
  "Juventus": "Serie A",
  "Chelsea": "Premier League",
  "Atletico Madrid": "La Liga",
  "Inter Milan": "Serie A",
  "Tottenham Hotspur": "Premier League",
  "Arsenal": "Premier League",
  "AC Milan": "Serie A",
  "Napoli": "Serie A",
  "Borussia Dortmund": "Bundesliga",
  "RB Leipzig": "Bundesliga",
  "Porto": "Primeira Liga",
  "Benfica": "Primeira Liga",
  "Ajax": "Eredivisie",
  "Sevilla": "La Liga",
  "Roma": "Serie A",
  "Lazio": "Serie A",
  "Shakhtar Donetsk": "Ukrainian Premier League",
  "Galatasaray": "Super Lig",
  "Fenerbahce": "Super Lig",
  "Flamengo": "Brazilian Serie A",
  "River Plate": "Argentine Primera Division",
  "Boca Juniors": "Argentine Primera Division",
  "Celtic": "Scottish Premiership",
  "Rangers": "Scottish Premiership",
  "Zenit St. Petersburg": "Russian Premier League",
  "Spartak Moscow": "Russian Premier League"
};

const cupNames = {
  "Real Madrid": "Copa del Rey",
  "Barcelona": "Copa del Rey",
  "Liverpool": "FA Cup",
  "Manchester City": "FA Cup",
  "Bayern Munich": "DFB-Pokal",
  "Paris Saint-Germain": "Coupe de France",
  "Juventus": "Coppa Italia",
  "Chelsea": "FA Cup",
  "Atletico Madrid": "Copa del Rey",
  "Inter Milan": "Coppa Italia",
  "Tottenham Hotspur": "FA Cup",
  "Arsenal": "FA Cup",
  "AC Milan": "Coppa Italia",
  "Napoli": "Coppa Italia",
  "Borussia Dortmund": "DFB-Pokal",
  "RB Leipzig": "DFB-Pokal",
  "Porto": "Taca de Portugal",
  "Benfica": "Taca de Portugal",
  "Ajax": "KNVB Cup",
  "Sevilla": "Copa del Rey",
  "Roma": "Coppa Italia",
  "Lazio": "Coppa Italia",
  "Shakhtar Donetsk": "Ukrainian Cup",
  "Galatasaray": "Turkish Cup",
  "Fenerbahce": "Turkish Cup",
  "Flamengo": "Copa do Brasil",
  "River Plate": "Copa Argentina",
  "Boca Juniors": "Copa Argentina",
  "Celtic": "Scottish Cup",
  "Rangers": "Scottish Cup",
  "Zenit St. Petersburg": "Russian Cup",
  "Spartak Moscow": "Russian Cup"
};

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startCareer);

async function startCareer() {
  let currentTeam = getRandomTeam();
  let yearMessage = `Your managerial career begins at ${currentTeam} (${leagueNames[currentTeam]}).`;
  alert(yearMessage);

  for (let year = 1; year <= 10; year++) {
    await pause(1000); // Pause before showing each year
    const yearRow = document.getElementById(`year${year}`);
    const outcome = getRandomOutcome();

    if (outcome === "Resign" || outcome === "Sacked") {
      currentTeam = getRandomTeam();
      yearRow.textContent = `Year ${year}: ${outcome}. You join ${currentTeam} (${leagueNames[currentTeam]}).`;
    } else {
      yearRow.textContent = `Year ${year}: ${formatOutcome(outcome, currentTeam)}.`;
    }
  }
}

function getRandomTeam() {
  return teams[Math.floor(Math.random() * teams.length)];
}

function getRandomOutcome() {
  return outcomes[Math.floor(Math.random() * outcomes.length)];
}

function formatOutcome(outcome, team) {
  const league = leagueNames[team];
  const cup = cupNames[team];

  switch (outcome) {
    case "League Title":
      return `${league}`;
    case "League Cup":
      return `${cup}`;
    case "League Title and League Cup":
      return `${league} and ${cup}`;
    case "League Cup and Champions League":
      return `${cup} and Champions League`;
    case "Champions League and League Title":
      return `Champions League and ${league}`;
    default:
      return outcome; // Trophyless, Domestic Treble, etc.
  }
}

function pause(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
