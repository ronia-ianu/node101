const fs = require('fs')
const moment = require('moment')
const todoList = [
    {
        text:'Buy christmas presents',
        date: moment('19.12.2020, 12:00', 'DD.MM.YYYY, hh:mm'),
        id: 1,
        done: false
    },
    {
        text: 'Wrap presents',
        date: moment('21.12.2020, 12:00', 'DD.MM.YYYY, hh:mm'),
        id: 1,
        done: false
    },
    {
        text: 'Decorate apartment',
        date: moment('23.12.2020, 12:00', 'DD.MM.YYYY, hh:mm'),
        id: 1,
        done: false
    }

]
const json = JSON.stringify(todoList)

fs.writeFileSync('todo.json', json)