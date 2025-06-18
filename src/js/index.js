const inputMine = document.getElementById('input_mine');
const imgMine = document.querySelector('.content__exemplo_tocha');
const buttonMine = document.querySelector('.button_mine');

inputMine.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        eventImgMinecraft();
    }
});

buttonMine.addEventListener('click', () => {
    eventImgMinecraft();
});

function eventImgMinecraft() {
    if (inputMine.value === '/time set night') {
        imgMine.classList.remove("day");
        imgMine.classList.add("night");
    } else if (inputMine.value === '/time set day') {
        imgMine.classList.remove("night");
        imgMine.classList.add("day");
    }
}

const inputSugestoes = document.querySelector('.input__sugestoes');
const liSugestoes = inputSugestoes.querySelector('li');

inputMine.addEventListener('input', (e) => {
    if (e.target.value === '') {
        liSugestoes.textContent = '/';
    } else {
        inputSugestoes.style.display = 'block';
        setTimeout(() => inputSugestoes.style.opacity = 1, 50);
        
        const valueInput = e.target.value;
        sugestoesInput(valueInput);
    }
});

function sugestoesInput(valueInput) {
    let sugestoesMais = [];
    if (valueInput === '/') {
        sugestoesMais = ['/','time'];
    }
    if (valueInput.includes('/time')) {
        sugestoesMais = ['/','time','set'];
    }

    if (valueInput === '/' || valueInput.includes('/time')) {
        document.querySelector('.ocl').style.display = 'none';
        liSugestoes.style.opacity = 1;
        liSugestoes.textContent = '';
        sugestoesMais.forEach((s, i) => {
            const span = document.createElement('span');
            if (i > 0) span.classList.add("sp");
            span.textContent = s;
            liSugestoes.appendChild(span);
        });

        liSugestoes.querySelectorAll('span')[liSugestoes.querySelectorAll('span').length - 1].style.opacity = .7;
    }

    if (valueInput.includes('/time set')) {
        liSugestoes.textContent = 'night';
        document.querySelector('.ocl').style.display = 'block';
        
        liSugestoes.style.opacity = .7;
    }

    if (valueInput.includes('/time set day') || valueInput.includes('/time set night')) {
        document.querySelector('.ocl').style.display = 'none';
        inputSugestoes.style.display = 'none';
    }
}

inputMine.addEventListener('click', () => {
    inputSugestoes.style.display = 'block';
    setTimeout(() => inputSugestoes.style.opacity = 1, 50);
    sugestoesInput(inputMine.value);
});

inputMine.addEventListener('blur', (e) => {
    inputSugestoes.style.opacity = 0;
    setTimeout(() => inputSugestoes.style.display = 'none', 300);
});

const cabecalho = document.querySelector('.cabecalho');
const containerHeader = cabecalho.querySelector('.cabecalho__container_header');
const containerIcons = cabecalho.querySelector('.cabecalho__icons');

const main = document.querySelector('.main');

cabecalho.addEventListener('mouseenter', () => {
    cabecalho.classList.remove("close");
    cabecalho.classList.add("open");
    containerHeader.style.display = 'block';
    containerIcons.style.display = 'none';
    containerIcons.style.opacity = 0;
    
    setTimeout(() => {
        containerHeader.style.opacity = 1;
    },100);
});

cabecalho.addEventListener('mouseleave', () => {
    cabecalho.classList.remove('open');
    cabecalho.classList.add('close');
    containerIcons.style.display = 'flex';
    containerHeader.style.display = 'none';
        
    setTimeout(() => {
        containerHeader.style.opacity = 0;
        containerIcons.style.opacity = 1;
    },100);
});

const itemsOption = document.querySelectorAll('.items__subitem');
itemsOption.forEach(option => {
    option.addEventListener('click', () => {
        window.location.hash = option.classList[1];
    });
});

const buttonHtml = document.querySelector('.button_qt.html');
const buttonCss = document.querySelector('.button_qt.css');
const buttonJs = document.querySelector('.button_qt.js');

buttonHtml.addEventListener('click', () => {
    resultGabarito(1, 5,
        {
            "qt1": "qt1_op1",
            "qt2": "qt2_op1",
            "qt3": "qt3_op1",
            "qt4": "qt4_op1",
            "qt5": "qt5_op1"
        }
    );
});

buttonCss.addEventListener('click', () => {
    resultGabarito(6, 10,
        {
            "qt6": "qt6_op1",
            "qt7": "qt7_op1",
            "qt8": "qt8_op1",
            "qt9": "qt9_op1",
            "qt10": "qt10_op1"
        }
    );
});

buttonJs.addEventListener('click', () => {
    resultGabarito(11, 15,
        {
            "qt11": "qt11_op1",
            "qt12": "qt12_op1",
            "qt13": "qt13_op1",
            "qt14": "qt14_op1",
            "qt15": "qt15_op1",
        }
    );
});

function resultGabarito(from, to, gabarito) {
    const radiosChecked = [];
    for (let i = from; i <= to; i++) {
        document.querySelectorAll(`input[name=qt${i}]`).forEach(radio => {
            radio.parentNode.style.boxShadow = 'none';
            if (radio.checked) {
                radiosChecked.push(radio);
            }
        });
    }

    radiosChecked.forEach(radio => {
        const div = document.getElementById(radio.id).parentNode;
        const correto = gabarito[radio.name] === radio.id;
        div.style.boxShadow = correto 
            ? '0 0 0 2px rgba(0, 255, 0, 0.8)'
            : '0 0 0 2px rgba(255, 0, 0, 0.8)';
    });
}
