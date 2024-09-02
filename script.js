const form_add_item = document.getElementById("add_item")
const compras = document.getElementById("compras")
const item = document.getElementById('item')

form_add_item.addEventListener("submit", () =>{
    event.preventDefault()

    let msg_item_removido = document.getElementById('msg_item_removido')
    msg_item_removido.classList.remove('item_removido_mostrar_msg')

    //Criando itens
    let div_item = document.createElement('div')
    div_item.classList.add('item')

    let label = document.createElement('label')
    let button_lixeira = document.createElement('button')
    let lixeira = document.createElement('img')
    lixeira.src = './img/lixeira.svg'
    let input_radio = document.createElement('input')
    input_radio.type = 'radio'
    let textNode = document.createTextNode(item.value)
    
    //criando arvore
    div_item.append(label,button_lixeira)
    button_lixeira.append(lixeira)
    label.append(input_radio,textNode)

    compras.append(div_item)

    button_lixeira.addEventListener("click", () => {
        divPai = button_lixeira.parentElement
        divPai.remove()
        let msg_item_removido = document.getElementById('msg_item_removido')
        msg_item_removido.classList.add('item_removido_mostrar_msg')
    })

    console.log(compras.querySelectorAll('div').length)


})






