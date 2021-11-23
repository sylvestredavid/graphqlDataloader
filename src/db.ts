import {UserModel} from "./models/User.model";
import {TeamModel} from "./models/Team.model";

const db: {users: UserModel[], teams: TeamModel[]} = {
    users: [
        {
            id: 1,
            name: 'david',
            firstName: 'sylvestre',
            email: 'dd@dd.dd',
            teamsIds: [1, 3, 6]
        },
        {
            id: 2,
            name: 'De wever',
            firstName: 'Etienne',
            email: 'aa@aa.a',
            teamsIds: [1, 2]
        }
    ],
    teams: [
        {
            id: 1,
            name: '1ere équipe',
            usersIds: [1]
        },
        {
            id: 2,
            name: '2eme équipe',
            usersIds: [1, 2]
        },
        {
            id: 3,
            name: '3eme équipe',
            usersIds: [1]
        }
    ]
}

export default db
