{/*
Input is an array of strings, which are a mix of numbers and letters.

Each line contains at least one number, but could contain more.

The desired value for each array element is a two digit value

This two digit value is the first number in the string, and the final number in the string
ex; 1d2jfj3rmfkjjr4 = 14

The goal is to find the sum of all of the two digit values in the array

- Process each string
    - O(n^2) approach is nested for loops, walking every string.
    - current approach:
    function main(coords){
let value = processStrings(coords)

return value
}

function processStrings(coords){
  var total=0

  for(var i =0; i< coords.length; i++){

    var end=coords[i].length-1
    var str=""

    for(var j =0; j<coords[i].length;j++){

      if(str.length ==2){
        total += parseInt(str)
        j=coords[i].length
      }

      if(parseInt(coords[i][j]) >=1){
        str+=coords[i][j]
      }

      if(parseInt(coords[i][end])>=1){
        str+=coords[i][end]
      }
      end--
    }
    
  }
  return total
}



console.log(main(['1abc2',
'pqr3stu8vwx',
'a1b2c3d4e5f',
'treb7uchet']))

-O(n) is not as simple as walking the string, as that would be a nested for loop (walking array, then walking element)


*/}



function main(file){
    let coords = readTextFile(file)
   
    let value = processStrings(coords)
    console.log(value)
    return value
    }

    function readTextFile(file){
        //read text file, create comma separated array
        //the file is within the same directory as the js file
        var fs = require('fs')
        var textByLine = fs.readFileSync(file).toString().split("\n")
        return textByLine

    }
    
    function processStrings(coords){
      var total=0
      for(var i =0; i< coords.length; i++){

        var str=""
        var tmp=0
        for(var j =0; j<coords[i].length;j++){
            
            if(str.length ===2){
                j=coords[i].length
            }
           
         if(!str.length){
            if(parseInt(coords[i][j]) >=1){
       
                str+=coords[i][j]
              }
         }
          
          if(parseInt(coords[i][j]) >=1){
     
            tmp=coords[i][j]
          }
          if(j === coords[i].length-1){
            str+=tmp
            
        }
         
        }
        if(str.length ===2){
            console.log(str)
             console.log(coords[i])
          total += parseInt(str)
        }else if(str.length ===1){
            
          repeat = str+str
          console.log(repeat,str)
          console.log(coords[i])
            total += parseInt(repeat)

        }
      }
      return total
    }
    
    function parseValues(str){
       
    }
    
   

    main('day1_input.txt')