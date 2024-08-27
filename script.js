form_add_item = document.getElementById("add_item")
compras = document.getElementById("compras")



form_add_item.addEventListener("submit", () =>{
    event.preventDefault()


    //Criando itens
    div_item = document.createElement('div')
    div_item.classList.add('item')

    label = document.createElement('label')
    button_lixeira = document.createElement('button')
    lixeira = document.createElement('img')
    lixeira.src = './img/lixeira.svg'
    input_radio = document.createElement('input')
    input_radio.type = 'radio'
    textNode = document.createTextNode(item.value)
    
    //criando arvore
    div_item.append(label,button_lixeira)
    button_lixeira.append(lixeira)
    label.append(input_radio,textNode)

    compras.append(div_item)

    button_lixeira.addEventListener("click", () => {
        divPai = button_lixeira.parentElement
        divPai.remove()
    })

})



