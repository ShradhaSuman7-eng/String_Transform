const Input=document.querySelector('input');
 
const lowerCaseOutput=document.querySelector('#lowercase span')
const upperCaseOutput=document.querySelector('#uppercase span')
const camelcaseOutput=document.querySelector('#camelcase span')
const PascalCaseOutput=document.querySelector('#pascalcase span')
const snakecaseOutput=document.querySelector('#snakecase span')
const kebabcaseOutput=document.querySelector('#kebabcase span')
const trim=document.querySelector('#trimcase span')

function capitalizeString(str){
    const firstCharacter=str[0].toUpperCase()
    return firstCharacter+str.slice(1,str.length);
}

function CamelCase(string){
  const lowerCaseString=string.toLowerCase();
  const wordArray=lowerCaseString.split(' ')
 const finalArray= wordArray.map((word,i)=>{
    if(i===0) return word
    return capitalizeString(word);
  })
return (finalArray.join(''))

}


function PascalCase(string){
    const lowerCaseString=string.toLowerCase()
    const wordArray=lowerCaseString.split(' ')
    const finalArray=wordArray.map((word,i)=>{
        return capitalizeString(word);
    })
    return (finalArray.join(''))
}


function snakeCase(string){
    const wordArray=string.split(' ')
    return wordArray.join('_')
}

function KebabCase(string){
    const wordArray=string.split(' ')
    return wordArray.join('-')
}

function TrimCase(string){
    const wordArray=string.split(' ')
    return wordArray.join('')
}

function updateScreen(){
    lowerCaseOutput.innerText=Input.value.toLowerCase()
upperCaseOutput.innerText=Input.value.toUpperCase()
camelcaseOutput.innerText=CamelCase(Input.value)
PascalCaseOutput.innerText=PascalCase(Input.value)
snakecaseOutput.innerText=snakeCase(Input.value)
kebabcaseOutput.innerText=KebabCase(Input.value)
trim.innerText=TrimCase(Input.value)

}
updateScreen()





Input.addEventListener('input',updateScreen)
   