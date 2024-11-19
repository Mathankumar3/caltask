function clicking(event){
    parent = document.querySelector('.screen')
    operator = ['-','+','/','*']
    if (! (operator.includes(parent.innerText.slice(-1)) && operator.includes(event.innerText)) ){        
        parent.innerText = parent.innerText + event.innerText
    }
    
}

window.addEventListener('keypress',(event)=>{
    operator = ['-','+','/','*']
    key = event.key
    code = event.code
    if (code.includes('Digit') || operator.includes(key) ){
        parent = document.querySelector('.screen')
        parent.innerText = parent.innerText + key
        console.log('key is press')
        console.log(event)

    }
    else{
        // console.log(event);
        console.log('error');
    }
    
})

const evaluate1 =()=>{
    parent = document.querySelector('.screen')
    outputOrginal = document.querySelector('.output')
    data = parent.innerText
    var output = eval(data)
    outputOrginal.innerText = output
    console.log('evaluate',output);
}



// window.addEventListener('keydown',(e)=>{
//     console.log(e)
//     console.log('key is down')
// })

// window.addEventListener('keyup',(e)=>{
//     console.log(e)
//     console.log('key is up')
// })



