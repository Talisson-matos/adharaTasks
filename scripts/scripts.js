let inputTitle = document.getElementById('title');
let descriptionValue = document.getElementById('description');
let dateValue = document.getElementById('date');
let fieldTasks = document.querySelector('.tarefas');
let fieldEvents = document.querySelector('.evento');
let historico = document.querySelector('.historico-items');
let tarefaButton = document.getElementById('btn-tarefa');
let eventoButton = document.getElementById('btn-evento');
let horas = document.getElementById('horas');
let dataAtual = document.getElementById('dateShow');
let claro = document.getElementById('claro');
let escuro = document.getElementById('escuro');
dataBuscada = ''

// theme

if( !document.body.classList.contains('dark-theme') && !document.body.classList.add('light-theme')){
    document.body.classList.add('dark-theme')
}

escuro.addEventListener('click', () => {
    document.body.classList.add('dark-theme')
    document.body.classList.remove('light-theme')
})

claro.addEventListener('click', () => {
    document.body.classList.add('light-theme')
    document.body.classList.remove('dark-theme')


})



// relogio

const nameMonths = [
    'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'
]

setInterval(() => {
    const seconds = new Date().getSeconds();
    const formatSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const minutes = new Date().getMinutes();
    const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const hours = new Date().getHours();
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const nameMonth = nameMonths[month];
    const year = new Date().getFullYear();
    dataBuscada = `${date} de ${nameMonth} de ${year}`
    const horario = `${hours} : ${formatMinutes} :  ${formatSeconds}`
    dataAtual.innerHTML = dataBuscada;
    horas.innerHTML = horario;


}, 1000)


tarefaButton.onclick = () => {
    addTasks()
}

eventoButton.onclick = () => {
    addEvents()
}




function addTasks() {

    const input = inputTitle.value;
    const date = dateValue.value;
    const description = descriptionValue.value;
    if (input.trim() == '' || date == '' || description.trim() == '') {
        alert('preencha os campos');
        inputTitle.focus()

    } else {
        tarefaButton.style.display = 'none';
        const trash = document.createElement('button');
        trash.innerHTML = 'apagar';
        trash.className = 'trash'
        let itemList = document.createElement('nav');
        let titulo = document.createElement('li');
        let data123 = document.createElement('li');
        let descrição = document.createElement('li');
        titulo.classList = 'titulo'
        data123.classList = 'data123'
        descrição.classList = 'descrição'
        titulo.innerHTML = input
        data123.innerHTML = date
        descrição.innerHTML = description;
        itemList.appendChild(titulo);
        itemList.appendChild(data123);
        itemList.appendChild(descrição);
        itemList.appendChild(trash)
        fieldTasks.appendChild(itemList);

        trash.addEventListener('click', (ev) => {
            ev.preventDefault();
            itemList.remove();



        });

        titulo.addEventListener('click', () => {
            data123.classList.add('backdrop')
            descrição.classList.add('backdrop')
            trash.classList.add('backdrop')
        })



        //    Histórico 
        let dataHistorico = document.createElement('p');
        let tituloHistorico = document.createElement('p');
        let trashHistorico = document.createElement('button')

        dataHistorico.innerHTML = dataBuscada;
        tituloHistorico.innerHTML = input;
        trashHistorico.innerHTML = 'apagar';
        trashHistorico.classList = 'trashHistorico';


        historico.appendChild(dataHistorico);
        historico.appendChild(tituloHistorico);
        historico.appendChild(trashHistorico);


        inputTitle.value = '';
        dateValue.value = '';
        descriptionValue.value = '';


        trashHistorico.addEventListener('click', (ev) => {
            ev.preventDefault();
            dataHistorico.remove();
            tituloHistorico.remove();
            trashHistorico.remove();
        })


    }

}



function addEvents() {

    const input = inputTitle.value;
    const date = dateValue.value;
    const description = descriptionValue.value;
    if (input.trim() == '' || date == '' || description.trim() == '') {
        alert('preencha os campos');
        inputTitle.focus()

    } else {
        eventoButton.style.display = 'none';
        const trash = document.createElement('button');
        trash.innerHTML = 'apagar';
        trash.className = 'trash'
        let itemList = document.createElement('nav');
        let titulo = document.createElement('li');
        let data123 = document.createElement('li');
        let descrição = document.createElement('li');
        titulo.classList = 'titulo'
        data123.classList = 'data123'
        descrição.classList = 'descrição'
        titulo.innerHTML = input
        data123.innerHTML = date
        descrição.innerHTML = description;
        itemList.appendChild(titulo);
        itemList.appendChild(data123);
        itemList.appendChild(descrição);
        itemList.appendChild(trash)
        fieldEvents.appendChild(itemList);
        inputTitle.value = '';
        dateValue.value = '';
        descriptionValue.value = '';
        trash.addEventListener('click', (ev) => {
            ev.preventDefault();
            itemList.remove()

        })

        titulo.addEventListener('click', () => {
            data123.classList.add('backdrop')
            descrição.classList.add('backdrop')
            trash.classList.add('backdrop')
        })



        //    Histórico 
        let dataHistorico = document.createElement('p');
        let tituloHistorico = document.createElement('p');
        let trashHistorico = document.createElement('button')

        dataHistorico.className = 'dataHistorico';
        tituloHistorico.className = 'tituloHistorico';
        trashHistorico.className = 'trashHistorico';

        dataHistorico.innerHTML = dataBuscada;
        tituloHistorico.innerHTML = input;
        trashHistorico.innerHTML = 'apagar';

        historico.appendChild(dataHistorico);
        historico.appendChild(tituloHistorico);
        historico.appendChild(trashHistorico);

        inputTitle.value = '';
        dateValue.value = '';
        descriptionValue.value = '';


        trashHistorico.addEventListener('click', (ev) => {
            ev.preventDefault();
            dataHistorico.remove();
            tituloHistorico.remove();
            trashHistorico.remove();
        })


    }

}


















