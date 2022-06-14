const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

// const ps = require('prompt-sync')
// const prompt = ps({sigint: true})
const prompt = require('prompt-sync')({sigint: true})

let n = prompt('enter some number: ')

numToWords(n)

function numToWords(n) {
    if(n<20) {
        return console.log(`${num[Math.floor(n)]}`)
    }

    if(n<100) {
        const digit = n%10
        return console.log(` ${tens[Math.floor(n/10)-2]} ${digit? `${num[digit]}` :''} `)
    }
    
    if(n<1000) {
        const digit2 = n%100
        return console.log(` ${num[Math.floor((n/100))]} hundred ${digit2==0? ``: `${digit2>20?` (${tens[Math.floor(digit2/10)-2]} ${num[Math.floor(digit2%10)]} )`:`${num[digit2]}`} `} `)
    }
}

// numToWords(n)
