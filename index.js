import { getInput, setOutput, setFailed } from '@actions/core'
import { context } from '@actions/github'


try {
    const nameToGreet = getInput('whogreet')
    console.log(`hello ${nameToGreet}`)

    const time = (new Date()).toString()
    setOutput('time', time)

    const payload = JSON.stringify(context.payload, undefined, 2)
    console.log(`The event playload ${payload}`)
} catch (error) {
    setFailed(error.message)
}