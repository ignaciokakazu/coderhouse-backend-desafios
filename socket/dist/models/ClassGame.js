"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassSession = void 0;
var ClassSession = /** @class */ (function () {
    function ClassSession(session) {
        this.session = session; //controla que la session sea correcta. Sino, devuelve error
        console.log("this session");
        console.log(this.session);
        this.players = []; //tiene que estar en el constructor
    }
    ClassSession.prototype.addPlayer = function (player) {
        try {
            var playerPoints = {
                player: player,
                points: 0
            };
            //agrega al jugador
            this.players.push(playerPoints);
        }
        catch (err) {
        }
    };
    ClassSession.prototype.response = function (player, idQuestion, idResponse) {
        //machea question con response. Si es correcto, suma 1. Sino resta
        //cuando suma (hacer un if)
        var addedPoints = 1;
        //contra la BD. Si existe, suma. Sino, no hace nada
        var playerPointsTemp = this.players.filter(function (play) { return play.player == player; });
        var obj;
        var pointsTemp;
        if (playerPointsTemp.points) {
            pointsTemp = Number(playerPointsTemp.points) + addedPoints;
        }
        else {
            pointsTemp = addedPoints;
        }
        obj = {
            player: player,
            points: pointsTemp
        };
        var playersFilter = this.players.filter(function (play) { return play.player != player; });
        playersFilter.push(obj);
        this.players = playersFilter;
        //ERROR. No está el player
    }; // sumarize(session) {
    return ClassSession;
}());
exports.ClassSession = ClassSession;
var session = new ClassSession("Abcdeuina");
session.addPlayer("Juan");
session.addPlayer("Raúl");
session.addPlayer("Julián");
session.response("Juan", 1, 2);
session.response("Raúl", 1, 2);
session.response("Julián", 1, 2);
console.log(session.players);
