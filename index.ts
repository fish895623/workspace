import { exec, echo, exit } from 'shelljs'

console.log('a')

function adding(a, b, c) {

}

if (exec('ls').code !== 0) {
    echo('we got error')
    exit(1)
}