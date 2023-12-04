function main(file){
    var games = readTextFile(file)
    var total = parseGames(games)
   
    console.log(total)
    return total
}

function readTextFile(file){
    //read text file, create comma separated array
    //the file is within the same directory as the js file
    var fs = require('fs')
    var textByLine = fs.readFileSync(file).toString().split("\n")
    return textByLine
}

function parseGames(games){
    var total = 0
    var gameID = 0
    for(var i = 0; i<games.length;i++){
        var colLoc = games[i].indexOf(":") +2
        gameID++
        
        total+= parseGame(games[i].slice(colLoc))
        
    }
    return total
}

function parseGame(game){
    var rounds = parseRounds(game)
    var roundMax = colorMaxNum(rounds)

    return roundMax
}

function parseRounds(game){
    var valStr = ""
    var rounds=[];
    for(var i = 0; i<game.length; i++){
         if(game[i] === ";" || game[i] === ","){
        rounds.push(valStr)
        valStr = ""
        i++
    } else{
        valStr+=game[i]
    }
    if(i === game.length-1){
        rounds.push(valStr)
    }
    
}
console.log(rounds)
console.log(game)
return rounds
}


function colorMaxNum(rounds){
   let output={
    'red':0,
    'green':0,
    'blue':0
   }
  

   
   for(var i = 0;  i< rounds.length; i++){
 
    var key =""      
    var val =  parseInt(rounds[i][0] + rounds[i][1] + rounds[i][2])

            if(rounds[i][1]===" "){
              key =  rounds[i].slice(2)  
              
            }
            else{
                key = rounds[i].slice(3)
            }
           
            if(val > output[key]){
                output[key] = val
            }
  
}
    
    var roundPower = output['red'] * output['green'] * output['blue']
return roundPower
}

main("day2_input.txt")