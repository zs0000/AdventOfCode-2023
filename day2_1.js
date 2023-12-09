function main(file){
    var games = readTextFile(file);
    var score = parseGames(games);
    console.log(score)
    return score
}

function readTextFile(file){
    var fs = require('fs');
    var text = fs.readFileSync(file).toString().split("\n");

    parseGames(text)
    return text;
}



function validateGame(game){
    let thresholdObj = {
    'red':12,
    'green':13,
    'blue':14
    }
    var valStr = ""
    for(var i = 0; i<game.length; i++){
        if(i == game.length-1){
            valStr += game[i]
            
            var [key,val] = readValues(valStr);
            if(val > thresholdObj[key]){
                return false
            }
        }
        if(game[i] === ',' || game[i] === ';'){
            var [key,val] = readValues(valStr);
            
            if(val > thresholdObj[key]){
                console.log("iteration: " ,i,"items being checked: " ,valStr, "key: ", key, "val: ", val, 'expected: ' ,thresholdObj[key] > val)
                return false
            }
            console.log("iteration: " ,i,"items being checked: " ,valStr, "key: ", key, "val: ", val, 'expected: ' ,thresholdObj[key] > val)
            
            valStr = ""
        } else{
            valStr += game[i]
        }
       
    }
    return true
}

function parseGames(games){
    var gameId = 0;
    var total=0
    //for game in games:
    for(var i = 0; i<games.length; i++){
        gameId++
        //boolean if any val exceed threshold
       let validateGameResult = validateGame(games[i])
            console.log(validateGameResult)
         if(validateGameResult === true){
          
              total += gameId
         }


    
    }
    return total
}

function readValues(str){
    var val = 0
    var valFound= false
    var key = ""

    for(var i = 0; i<str.length; i++){
        if(parseInt(str[i]) >=0){
            val= parseInt(str[i])
            if(parseInt(str[i+1]) >=0){
       
                val = parseInt(str[i]+str[i+1])
                i+=2
            }
            valFound = true
        }
        if(str[i] == " " && valFound == true){
            key = str.slice(i+1,str.length)
        }
    }
 
    return [key,val]
}

main('day2.txt')