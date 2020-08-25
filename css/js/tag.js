const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

function getColorsFromArray(tagHtml) {
    const tags = [
        'p',
        'div',
        'span',
        'section',
        'ul',
        'ol',
        'header',
        'nav',
        'main',
        'footer',
        'form',
        'body'    
    ]

    const colors = [
        '#388e3c',
        '#1565c0',
        '#e53935',
        '#f67809',
        '#5e35b1',
        '#fbc02d',
        '#d81b60',
        '#64dd17',
        '#00acc1',
        '#304ffe',
        '#9f6581',
        '#25b6da'
    ]

    let color = '#616161';
    for (let i=0; i<tags.length; i++) {
        if (tags[i] === tagHtml) {
            color = colors[i]
            break;
        }
    }
    
    return color;

}


document.querySelectorAll('.tag').forEach(e => {
    const tagName = e.tagName.toLowerCase()

    // e.style.borderColor = colors.get(tagName)
    e.style.borderColor = getColorsFromArray(tagName)

    //renderiza o label apenas se não existir a classe '.nolabel'
    if (!e.classList.contains('nolabel')) {
        const label = document.createElement('label')
        // label.style.backgroundColor = colors.get(tagName)
        label.style.backgroundColor = getColorsFromArray(tagName)
        label.innerHTML = tagName
        e.insertBefore(label, e.childNodes[0])
    }


})