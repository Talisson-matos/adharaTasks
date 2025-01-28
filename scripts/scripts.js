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
dataBuscada = ''



// relogio

const nameMonths = [
    'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'
]

setInterval(() => {
    const seconds = new Date().getSeconds();
    const formatSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const minutes = new Date().getMinutes();
    const hours = new Date().getHours();
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const nameMonth = nameMonths[month];
    const year = new Date().getFullYear();
    dataBuscada = `${date} de ${nameMonth} de ${year}`
    const horario = `${hours} : ${minutes} :  ${formatSeconds}`
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
        alert('preencha os campos')

    } else {
        tarefaButton.style.display = 'none';
        const trash = document.createElement('button');
        trash.innerHTML = 'apagar';
        trash.className = 'trash'
        let itemList = document.createElement('nav');
        let titulo = document.createElement('li');
        let data123 = document.createElement('li');
        let descrição = document.createElement('li');
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
        alert('preencha os campos')

    } else {
        eventoButton.style.display = 'none';
        const trash = document.createElement('button');
        trash.innerHTML = 'apagar';
        trash.className = 'trash'
        let itemList = document.createElement('nav');
        let titulo = document.createElement('li');
        let data123 = document.createElement('li');
        let descrição = document.createElement('li');
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


















