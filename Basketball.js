class Basketball {
    constructor(leagueName, maxTeamPlayers) {
        this.leagueName = leagueName;
        this.maxTeamPlayers = maxTeamPlayers;

        this.playersList = [];

        this.teamList = [];

    }

    wannaBePlayer(playerName, playerPrice) {
        this.playersList.push({ playerName, playerPrice });
    }

    createTeam(teamName) {
        this.teamList.push({ teamName, playerList: [] });
        console.log(`A "${teamName}" just entered a game!`);
    }

    buyPlayer(teamId, playerId) {
        const team = this.teamList[teamId - 1];
        const player = this.playersList[playerId - 1];
        team.playerList.push(playerId)
        console.log(`"${team.teamName}" team just acquired new player ${player.playerName} for ${player.playerPrice} cash/year!`);
    }

    teamValue(teamId) {
        const team = this.teamList[teamId - 1];
        let totalSalary = 0;
        for (let i = 0; i < team.playerList.length; i++) {
            const playerId = team.playerList[i];
            const player = this.playersList[playerId - 1];
            totalSalary += player.playerPrice;
            // console.log(playerId);
            // console.log(player);
        }
        console.log(`"${team.teamName}" team is paying ${totalSalary} cash/year for it's players.`);
    }
}

module.exports = Basketball;
