let inputs = document.querySelectorAll('.in')
let listainputs = Array.from(inputs)
const cod = document.querySelector('.cod')
const btn = document.querySelector('.btn')
const mensaje = document.querySelector('.mensaje')

const URL_CODIGOBARRAS = 'http://localhost:5000/verificacod'
const URL_PUSHDATOS = 'http://localhost:5000/cargardatos'


function resetInput(){
    inputs.forEach(item =>{
        item.value = ''
    })
}

inputs.forEach( item =>{
    item.disabled = true
})

function resetall(){
    resetInput()

    inputs.forEach( item =>{
        item.disabled = true
    })
    
    cod.value = ''
    cod.focus()
}


//Verifca la existencia del codigo de barras
cod.addEventListener('keypress', e =>{
    let code = ( e.keyCode ? e.keyCode : e.which)
        if ( code == 13 ){
            e.preventDefault()
            //focus al siguiente
            fetch(URL_CODIGOBARRAS,{
                method : 'POST',
                body : JSON.stringify({ codigobarras : cod.value }),
                headers : { 'Content-Type' : 'application/json' }
            })
            .then( res => res.json())
            .then( data =>{
                inputs.forEach(item =>{
                    item.disabled = data.existe ? true : false
                })

                if (data.existe){
                    cod.value = ''
                    cod.focus()
                }
                else{
                    mensaje.classList.remove('muted')
                    mensaje.classList.add('ok')
                    mensaje.innerHTML = 'ok'
                    listainputs[0].focus()
                }
            })
                
            .catch( err =>{
                console.log('ah ocurrido un error cuando se guardaron los datos')
            })
        }
})


function pushMongo(){
    fetch(URL_PUSHDATOS,{
        method : 'POST',
        body : JSON.stringify({
            codigobarras : document.querySelector('.cod').value,
            marca : document.querySelector('.marca').value,
            producto : document.querySelector('.producto').value,
            precio : document.querySelector('.precio').value,
            preciopublico : document.querySelector('.precio-publico').value 
        }),
        headers : { 'Content-Type' : 'application/json' }
    })
    .then( res =>{
        console.log('datos agregados sastifactoriamente')
        resetall()
    })
    .catch( err=>{
        console.log('error')
    })
}

document.addEventListener('submit', e =>{
    e.preventDefault()
    pushMongo()
})

btn.addEventListener('keypress', e =>{
    let code = ( e.keyCode ? e.keyCode : e.which)
        if ( code == 13 ){
            e.preventDefault()
            pushMongo()
        }
})

//codigo mantenible
inputs.forEach( (item,i) =>{
    item.addEventListener('keypress',e =>{
        let code = ( e.keyCode ? e.keyCode : e.which)
        if ( code == 13 ){
            e.preventDefault()
            //focus al siguiente
            if ( (i+1) < listainputs.length ) listainputs[i+1].focus()
        }
    })
})