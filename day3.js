{/*
// iterate through the map one row at a time,
// find numbers, at each number do a  look around (up, down, left, right, up diagonals, down diagonals)
// identify which edges elements exist, then perform checks based on index.
// if row = 0 , check only right, down, down diagonals
// if row = length-1, check only right,left, up, up diagonals
// upon a number element being found, and a touching at least one symbol, add num val to total
// return total
*/}

function main(file){
    var map = readTextFile(file)
    var total = traverseMap(map)
    console.log(total)
    return total
}

function readTextFile(file){
    var fs = require('fs')
    var textByLine = fs.readFileSync(file).toString().split("\n")
    return textByLine
}

function traverseMap(map){
    var total = 0
    var index = 0
    
    
    var vals=[]
    for(var row = 0; row< map.length; row++){
        var str=''
        var boolArr=[]
        var val=0
        
  
        for(var col = 0; col< map[row].length; col++){
            if(col === map[row].length-1 && parseInt(str) >=0 && boolArr.includes('true')){
                if(parseInt(map[row][col]) >=0) str += map[row][col]
                console.log('start total',total, row)   
                val = parseInt(str)
                vals.push(val)
                total+=val
                val = 0
                str=''
                boolArr=[]
                
            }
            var up = row === 0 ? 0 : map[row-1][col]
            var down = row === map.length-1 ? 0 : map[row+1][col]
            var left = col === 0 ? 0 : map[row][col-1]
            var right = col === map[row].length-1 ? 0 : map[row][col+1]
            var upLeft = row === 0 || col === 0 ? 0 : map[row-1][col-1]
            var upRight = row === 0 || col === map[row].length-1 ? 0 : map[row-1][col+1]
            var downLeft = row === map.length-1 || col ===0 ? 0 : map[row+1][col-1]
            var downRight = row === map.length-1 || col === map[row].length-1 ? 0 : map[row+1][col+1]
            
            var currItem = map[row][col]
            var currVal = parseInt(currItem)
            //if is num
            if(currVal >= 0){
                str+=currItem
            }else if(
                currItem !== "." &&
                str.length > 0 
                && parseInt(str) >=0
             ){
                val = parseInt(str)
                vals.push(val)
                total+=val
                val = 0
                str=''
                boolArr=[]
                
                
            
            }else{
                if(boolArr.includes('true') && str.length > 0){

                    val = parseInt(str)
                    vals.push(val)
                    total+=val
                    
        
                    val = 0
                    boolArr=[]
                    str=''
                    console.log('total',total, row)

                } else{
                    str=''
                    boolArr=[]
                    val = 0
                }
            }
              
           
            // if not top or bottom row
            if(map[row][col] === "."){
            
            }else 
            if (row > 0 && row < map.length-1){
                //if not starting or end column -- all middles - check all
                if(col > 0 && col < map[row].length-1){
                  if(isSymbol(up) || isSymbol(down) || isSymbol(left) || isSymbol(right) || isSymbol(upLeft) || isSymbol(upRight) || isSymbol(downLeft) || isSymbol(downRight)){
                      boolArr.push('true')
                      
                  }
                  
                    // starting column
                } else if(col === 0){
                    if (isSymbol(up) || isSymbol(down) || isSymbol(right) || isSymbol(upRight) || isSymbol(downRight)){
                        boolArr.push('true')
                    
                    }

                    // end column
                } else if (col === map[row].length-1){
                    if(isSymbol(up) || isSymbol(down) || isSymbol(left) || isSymbol(upLeft) || isSymbol(downLeft)){
                        boolArr.push('true')
                        
                       
                    }
                    
                } else{

                }
                // top row
            } else if( row ===0){
                // if not starting or end column -- all middles - check all
                if(col > 0 && col < map[row].length-1){
                  if(isSymbol(down) || isSymbol(left) || isSymbol(right) || isSymbol(downLeft) || isSymbol(downRight)){
                
                    boolArr.push('true')
                    
                    }
                  
                    // starting column
                } else if(col ===0){
                    if (isSymbol(down) || isSymbol(right) || isSymbol(downRight)){
                        boolArr.push('true')
                        
                    }

                    // end column
                } else if (col === map[row].length-1){
                    if(isSymbol(down) || isSymbol(left) || isSymbol(downLeft)){
                        boolArr.push('true')
                       
                    }
                    
                } else{

                }

                //bottom row 
            } else if(row === map.length-1){

                // if not starting or end column -- all middles - check all
                if(col > 0 && col < map[row].length-1){
                  if(isSymbol(up) || isSymbol(left) || isSymbol(right) || isSymbol(upLeft) || isSymbol(upRight)){
                      boolArr.push('true')
                      
                  }
                  
                    // starting column
                } else if(col === 0){
                    if (isSymbol(up) || isSymbol(right) || isSymbol(upRight)){
                        boolArr.push('true')

                    
                    }

                    // end column
                } else if (col === map[row].length-1){
                    if(isSymbol(up) || isSymbol(left) || isSymbol(upLeft)){
                        boolArr.push('true')
                        
                    }
                    
                } 
            } 
            console.log('end total',total, row) 
        }
    }
    return total
}

function isSymbol(item){
    if(parseInt(item) >= 0 || item ==="."){
        return false
    }
    return true
}


main('day3_input.txt')