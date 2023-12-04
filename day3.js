{/*
// iterate through the map one row at a time,
// find numbers, at each number do a  look around (up, down, left, right, up diagonals, down diagonals)
// identify which edges elements exist, then perform checks based on index.
// if row = 0 , check only right, down, down diagonals
// if row = length-1, check only right,left, up, up diagonals
// upon a number element being found, and a touching at least one symbol, add num val to total
// return total
*/}
function readTextFile(file){
    var fs = require('fs')
    var textByLine = fs.readFileSync(file).toString().split("\n")
    return textByLine
}

function traverseMap(map){
    var index = 0
    var total = 0
    for(var row =0; row<map.length; row++){
        for(var col=0; col<map[row].length; col++){
            if(parseInt(map[row][col]) >=0){
            
            }
        }
    }

    return total
}