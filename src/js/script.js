const textArea = document.querySelector('.text-area')
const message = document.querySelector('.message')
const encryptBtn = document.getElementById('btn-encrypt')
const decryptBtn = document.getElementById('btn-decrypt')

encryptBtn.addEventListener('click', () => {
    const encryptText = encrypt(textArea.value)
    message.value = encryptText
    textArea.value = ''
})

const encrypt = (encryptString) => {
    
    let code = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
    encryptString = encryptString.toLowerCase()

    code.forEach(element => {
        if (encryptString.includes(element[0])) {
            encryptString = encryptString.replaceAll(element[0], element[1])
        }
    })

    return encryptString

}

decryptBtn.addEventListener('click', () => {
    const decryptText = decrypt(textArea.value)
    message.value = decryptText
    textArea.value = ''
})

const decrypt = (decryptString) => {
    
    let code = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
    decryptString = decryptString.toLowerCase()

    code.forEach(element => {
        if (decryptString.includes(element[1])) {
            decryptString = decryptString.replaceAll(element[1], element[0])
        }
    })

    return decryptString

}


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"