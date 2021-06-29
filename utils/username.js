
const adjectives=[
    'erratic',
    'conscious',
    'magnificent',
    'jealous',
    'mysterious',
    'beneficial',
    'towering',
]

const objects=[

'coffee',
'candle',
'magnet',
'toothbrush',
'squirell',
'ring',
'soap',
]

function random_username_generator(){
let s=''
let adj=adjectives[Math.floor(Math.random()*7)]
let obj=objects[Math.floor(Math.random()*7)]
s=adj+obj;
return `${adj}-${obj}`

}
module.exports={
    random_username_generator
}