const textArea = document.querySelector('.text-area')
const encryptBtn = document.getElementById('btn-encrypt')
const decryptBtn = document.getElementById('btn-decrypt')
const copyBtn = document.getElementById('btn-copy')
const message = document.getElementById('message')

const modifieTextArea = () => {
    message.style.backgroundImage = 'none'
}


encryptBtn.addEventListener('click', () => {

    modifieTextArea()
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
    modifieTextArea()
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

const copyToClipboard = async () => {
    modifieTextArea()
    await navigator.clipboard.writeText(message.value)
}

copyBtn.addEventListener('click', async () => {
    copyBtn.textContent = 'Copiado'
    copyBtn.style.color = '#FFFFFF'
    copyBtn.style.background = '#994a98'
    setTimeout(() => {
        copyBtn.textContent = 'Copiar'
        copyBtn.style.color = '#49064c'
        copyBtn.style.background = '#808080'
    }, 2000)
    await copyToClipboard()
})