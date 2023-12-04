const charValues = {
    'one':'1',
    'two':'2',
    'three':'3',
    'four':'4',
    'five':'5',
    'six':'6',
    'seven':'7',
    'eight':'8',
    'nine':'9',
}


function main(file){
    var coords = readTextFile(file)
    var total = processStrings(coords)
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

function processStrings(coords){
    var total = 0
    for(var i = 0; i< coords.length-1; i++){
       total+= parseValues(coords[i])
       console.log(total)
    }
    return total
}

function parseValues(str){
    
    var tmp = ""
    var holder=""
 for(var i = 0; i< str.length; i++){
    if(parseInt(str[i]) >=1){
        if(!tmp.length){
            tmp = str[i]
        } else {
            holder =str[i]
        } 
    } 
    if(i+4 <= str.length-1){
        var fiveItem = checkInObject(str[i]+str[i+1]+str[i+2]+str[i+3]+str[i+4])
       
        if(fiveItem!==false){
            if(tmp.length ===1){
            holder = fiveItem
            } else {
                tmp+=fiveItem
            }
        } 
    }

    if(i + 3 <= str.length-1){
        var fourItem = checkInObject(str[i]+str[i+1]+str[i+2]+str[i+3])
        if(fourItem!==false){
            if(tmp.length ===1){
                holder = fourItem
            } else {
                tmp+=fourItem
            }
        }
    }
    if(i + 2 <= str.length-1){
        
        var threeItem = checkInObject(str[i]+str[i+1]+str[i+2])
        
    if(threeItem!==false){
        if(tmp.length ===1){
            holder = threeItem
        } else {
            tmp+=threeItem
        }
    }
    }

    if(i === str.length-1){
        console.log('chosen: ', tmp, holder)
         tmp+=holder
    }
 }
 if(tmp.length ===2){
    return parseInt(tmp)
 } else if(tmp.length ===1){
    console.log('repeat: ', tmp, tmp)
    return parseInt(tmp+tmp)
 }
}

function checkInObject(item){
    if(Object.keys(charValues).includes(item)){
        return charValues[item]
    }
    return false
}

main('day1_input.txt')