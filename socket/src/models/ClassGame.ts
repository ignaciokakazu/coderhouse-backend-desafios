import moment from 'moment';
const objPreguntas: any = [
    {
        id: 1, 
        pregunta: "Qué cosa?",
        puntaje: 1,
        respuesta: [
            {
                id: 1,
                texto: "blablabla"
            },
            {
                id: 2,
                texto: "blablabla"
            },
            {
                id: 3,
                texto: "blablabla"
            },
            {
                id: 4,
                texto: "blablabla"
            },
            ],
        respuestaCorrecta: 1
    }
    ]

export class ClassSession {
    players: any;
    session: string;
    paso1: any;
    paso2: any;
    paso3: any;
    paso4: any;
    paso5: any;

    constructor(session:string) { //paso 1
        this.session = session; //controla que la session sea correcta. Sino, devuelve error
        console.log("this session");
        console.log(this.session);
        this.players=[]; //tiene que estar en el constructor
    }

    addPlayer(player:string) { //paso 1. manda cantidad de usuarios
        try {
            const playerPoints: any = {
                player: player,
                points: 0
            }
            //agrega al jugador
            this.players.push(playerPoints);

            return {
                player: player,
                points: 0,
                cantidad: this.players.length
                }

        } catch(err:any) {
            console.log(err.message);
        }
    }

    response(player:string, idQuestion:number, idResponse:number) { //paso 2. guarda
        //machea question con response. Si es correcto, suma 1. Sino resta
        //cuando suma (hacer un if)
        const addedPoints:number = 1;
        
        //contra la BD. Si existe, suma. Sino, no hace nada

        const playerPointsTemp:any = this.players.filter((play:any)=>play.player == player);
        let obj: any;
        let pointsTemp:number;

        if (playerPointsTemp.points) {
            pointsTemp = Number(playerPointsTemp.points) + addedPoints
         } else {
            pointsTemp = addedPoints;
         }
         
        obj = {
          player: player,
          points: pointsTemp
        }
        
        const playersFilter:any = this.players.filter((play:any)=>play.player != player);
        playersFilter.push(obj)
        this.players = playersFilter;

        //ERROR. No está el player
    }    // sumarize(session) {
        //hace la suma y el top
    // }

}

const session = new ClassSession("Abcdeuina");
//paso 1: crea sesion. Añade jugadores
//paso 2: muestra la cantidad de conexiones
//paso 3: manda pregunta y respuestas. Recibe las respuestas
//paso 4: espera. muestra jugadores que todavía no terminaron
//paso 5: envía pregunta, respuesta y correccion. 

session.addPlayer("Juan");
session.addPlayer("Raúl");
session.addPlayer("Julián");

session.response("Juan",1,2);
session.response("Raúl",1,2);
session.response("Julián",1,2);

console.log(session.players);