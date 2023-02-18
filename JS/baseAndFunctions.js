// Объекты - задачиoptionCurr
const allProblems = 
[
    {problem: '1.1', answer: 102, procent: 15},
    {problem: '1.2', answer: 0.9, procent: 35},
    {problem: '1.3', answer: 128, procent: 25},
    {problem: '1.4', answer: 62, procent: 30},
    {problem: '1.5', answer: 73, procent: 50},
    {problem: '1.6', answer: 18, procent: 20},
    {problem: '1.7', answer: 4.5, procent: 35},
    {problem: '1.8', answer: 6, procent: 40},
    {problem: '1.9', answer: 38, procent: 35},
    {problem: '1.10', answer: 71, procent: 30},
    {problem: '1.11', answer: 36, procent: 35},
    {problem: '1.12', answer: 3, procent: 80},
    {problem: '1.13', answer: 7, procent: 40},
    {problem: '1.14', answer: 93, procent: 30},
    {problem: '1.15', answer: 45, procent: 50},
    {problem: '1.16', answer: 13, procent: 45},
    {problem: '1.17', answer: 59, procent: 55},
    {problem: '1.18', answer: 72, procent: 45},
    {problem: '1.19', answer: 35, procent: 45},
    {problem: '1.20', answer: 30, procent: 35},
    {problem: '1.21', answer: 0.6, procent: 30},
    {problem: '1.22', answer: 25, procent: 60},
    {problem: '1.23', answer: 1, procent: 25},
    {problem: '1.24', answer: 13, procent: 40},
    {problem: '1.25', answer: 64, procent: 30},
    {problem: '1.26', answer: 119, procent: 60},
    {problem: '1.27', answer: 3, procent: 30},
    {problem: '1.28', answer: 2, procent: 70},
    {problem: '1.29', answer: 130, procent: 65},
    {problem: '1.30', answer: 5, procent: 30},
    {problem: '2.1', answer: 75, procent: 25},
    {problem: '3.1', answer: 0.6, procent: 30},
    {problem: '4.1', answer: 0.9975, procent: 60},
    {problem: '5.1', answer: 21, procent: 25},
    {problem: '6.1', answer: 5, procent: 20},
    {problem: '7.1', answer: 2, procent: 20},
    {problem: '8.1', answer: 5000, procent: 50},
    {problem: '9.1', answer: 10, procent: 25},
    {problem: '10.1', answer: 260, procent: 35},
    {problem: '11.1', answer: -6, procent: 25},
    {problem: '2.2', answer: 24, procent: 40},
    {problem: '2.3', answer: 1500, procent: 35},
    {problem: '2.4', answer: 5, procent: 65},
    {problem: '2.5', answer: 9, procent: 55},
    {problem: '2.6', answer: 12, procent: 50},
    {problem: '2.7', answer: 12, procent: 60},
    {problem: '2.8', answer: 3, procent: 30},
    {problem: '3.2', answer: 0.25, procent: 20},
    {problem: '3.3', answer: 0.32, procent: 35},
    {problem: '3.4', answer: 0.2, procent: 20},
    {problem: '3.5', answer: 0.04, procent: 50},
    {problem: '3.6', answer: 0.19, procent: 15},
    {problem: '3.7', answer: 0.3, procent: 30},
    {problem: '3.8', answer: 0.22, procent: 60},
    {problem: '3.9', answer: 0.36, procent: 25},
    {problem: '4.2', answer: 0.036, procent: 65},
    {problem: '4.3', answer: 0.9216, procent: 30},
    {problem: '1.31', answer: 18, procent: 90},
    {problem: '5.2', answer: 3, procent: 15},
    {problem: '5.3', answer: 5, procent: 40},
    {problem: '5.4', answer: 6, procent: 10},
    {problem: '5.5', answer: -42, procent: 40},
    {problem: '5.6', answer: 2, procent: 30},
    {problem: '5.7', answer: 6, procent: 50},
    {problem: '5.8', answer: -1, procent: 35},
    {problem: '5.9', answer: 3, procent: 30},
    {problem: '5.10', answer: 12.5, procent: 30},
    {problem: '5.11', answer: 8.75, procent: 30},
    {problem: '5.12', answer: 3, procent: 20},
    {problem: '5.13', answer: 31, procent: 30},
    {problem: '5.14', answer: 35, procent: 45},
    {problem: '5.15', answer: 6, procent: 75},
    {problem: '5.16', answer: -9, procent: 80},
    {problem: '10.2', answer: -15, procent: 55},
    {problem: '10.3', answer: -0.2, procent: 65},
    {problem: '10.4', answer: 0.15, procent: 50},
    {problem: '10.5', answer: 61, procent: 60},
    {problem: '10.6', answer: -10, procent: 65},
    {problem: '10.7', answer: -7, procent: 35},
    {problem: '10.8', answer: -11, procent: 45},
    {problem: '11.2', answer: 8, procent: 40},
    {problem: '11.3', answer: 10, procent: 65},
    {problem: '11.4', answer: -15, procent: 45},
    {problem: '11.5', answer: 10, procent: 50},
    {problem: '11.6', answer: 2, procent: 60},
    {problem: '11.7', answer: -4, procent: 60},
    {problem: '11.8', answer: 2, procent: 65},
    {problem: '11.9', answer: 20, procent: 20},
    {problem: '11.10', answer: 4, procent: 30},
    {problem: '11.11', answer: -4.5, procent: 55},
    {problem: '11.12', answer: -2.5, procent: 60},
    {problem: '11.13', answer: -6, procent: 60},
    {problem: '11.14', answer: 1, procent: 70},
    {problem: '11.15', answer: 1, procent: 70},
    {problem: '6.2', answer: 14, procent: 40},
    {problem: '9.2', answer: 15, procent: 80},
    {problem: '11.16', answer: 7.5, procent: 55},
    {problem: '2.9', answer: 72, procent: 30},
    {problem: '7.2', answer: 1.8, procent: 25},
    {problem: '3.10', answer: 0.85, procent: 30},
    {problem: '9.3', answer: 10, procent: 25},
    {problem: '7.3', answer: 4, procent: 35},
    {problem: '1.32', answer: 32, procent: 30},
    {problem: '5.17', answer: 5, procent: 20},
    {problem: '8.2', answer: 17, procent: 30},
    {problem: '3.11', answer: 0.2, procent: 40},
    {problem: '11.17', answer: 5, procent: 30},
    {problem: '9.4', answer: 19, procent: 30},
    {problem: '6.3', answer: 64, procent: 35},
    {problem: '6.4', answer: 27, procent: 25},
    {problem: '5.18', answer: 24, procent: 30},
    {problem: '7.4', answer: -7, procent: 40},
    {problem: '2.10', answer: 60, procent: 50},
    {problem: '3.12', answer: 0.35, procent: 20},
    {problem: '11.18', answer: 81, procent: 30},
    {problem: '11.19', answer: 3, procent: 60},
    {problem: '9.5', answer: 10, procent: 50},
    {problem: '6.5', answer: 0.84, procent: 65},
    {problem: '2.11', answer: 6, procent: 35},
    {problem: '7.5', answer: -1, procent: 55},
    {problem: '1.33', answer: 6, procent: 40},
    {problem: '5.19', answer: -9, procent: 30},
    {problem: '8.3', answer: 6, procent: 60},
    {problem: '9.6', answer: 18, procent: 70},
    {problem: '8.4', answer: 190, procent: 65},
    {problem: '6.6', answer: 1, procent: 60},
    {problem: '2.12', answer: 12, procent: 60},
    {problem: '7.6', answer: 2, procent: 30},
    {problem: '3.13', answer: 0.05, procent: 45},
    {problem: '9.7', answer: 20, procent: 60},
    {problem: '3.14', answer: 0.4, procent: 40},
    {problem: '7.7', answer: 4, procent: 25},
    {problem: '6.7', answer: 1.5, procent: 60},
    {problem: '11.20', answer: 10, procent: 35},
    {problem: '9.8', answer: 20, procent: 50},
    {problem: '8.5', answer: 45, procent: 45},
    {problem: '5.20', answer: 2, procent: 75},
    {problem: '3.15', answer: 0.92, procent: 35},
    {problem: '6.8', answer: -0.5, procent: 85},
    {problem: '7.8', answer: 5, procent: 40},
    {problem: '1.34', answer: 54, procent: 40},
    {problem: '5.21', answer: 1, procent: 40},
    {problem: '3.16', answer: 0.994, procent: 40},
    {problem: '9.9', answer: 55, procent: 70},
    {problem: '6.9', answer: 11, procent: 65},
    {problem: '2.13', answer: 60, procent: 30},
]   


// Все задания по номерам
let problems = ['-', [], [], [], [], [], [], [], [], [], [], []]


// Распределение по ключу number
allProblems.forEach(el => {
    const problemSplit = el.problem.split('.')
    el.id = +problemSplit[0] * 1000 + (+problemSplit[1])
    el.number = +problemSplit[0]

    problems[el.number].push(el)
})

const secondBallArray = {
    0: 0, 1: 6, 2: 11, 3: 17, 4: 22, 5: 27,
    6: 34, 7: 40, 8: 46, 9: 52, 10: 58,
    11: 64
}


// n неповторяющих элементов из массива
function randomProblem(problem, countPr) {
    let result = [];

    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    while (result.length != countPr) {
        let index = getRandomInt(problems[problem].length);    
        result.push(problems[problem][index]);    
        result = result.filter((v, i, arr) => arr.indexOf(v) == i);
    }
    return result
}

function colorProcent(procent){
    if (procent < 30) return 'greenColor'
    if (procent < 70) return 'yellowColor'
    return 'redColor'
}
// Вывод задания на HTML на вкладку variant
function problemHTMLvariant(probl) {
    return `<div class="conteyner">
    <div class="number gray" > 
        <span class='idInfo'>Номер ${probl.number} №${probl.id} </span> 
        <span class='${colorProcent(probl.procent)}'> (Сложность: ${probl.procent}%) </span> 
    </div>
        <img src='/MathWeb/img/${probl.problem}.jpg' >
        <div class="answer">Введите ответ: <input class='input'> </div>
    </div>`
} 


// Вывод задания на HTML на вкладку currSubject
function problemHTMLcurr(probl, id) {
    return `<div id = ${id} class="conteyner" >
    <div class="number gray" > 
        <span class='idInfo'>Номер ${probl.number} №${probl.id} </span> 
        <span class='${colorProcent(probl.procent)}'> (Сложность: ${probl.procent}%) </span> 
    </div>
        <img src='/MathWeb/img/${probl.problem}.jpg'>

        <div class="answer">Введите ответ: <input class='input'> <button class="submit"> Ответить </button> </div>
    </div>`
}


function setLocalStorage(nameLocal, value){
    localStorage.setItem(nameLocal, JSON.stringify(value))
}

function getLocalStorage(value){
    return JSON.parse(localStorage.getItem(value))
}

function removeLocalStorage(value){
    localStorage.removeItem(value)
}


// Смена background цвета
function background(color, index) {
    document.getElementsByClassName("number")[index].classList.remove('gray', 'green', 'red')
    document.getElementsByClassName("number")[index].classList.add(color)
}


// Сумма массива
function summArray(array){
    let sum = 0
    array.forEach((element, index) =>{ if (index != 0) sum += element})
    return sum
}


// Массив количеств задач [-, 0, 1, 3, ....]
function pushArrayCountProblem(){
    const DOMarrayCountProblem = ['-', ...document.getElementsByClassName('countProblem')]
    let arrayCountProblem = ['-']

    DOMarrayCountProblem.forEach((element, index) => {if (index != 0) arrayCountProblem.push(Number(element.value))})
    return arrayCountProblem
}


// Округление до сотых
function rounded(number){
    return +number.toFixed(2);
}

// Присваение все input в index значение = value
function countProblemToNumber(value){
    for (i = 0; i <= 10; i++) document.getElementsByClassName('countProblem')[i].value = value
}

function defaultBtnVariant(){
    const variant = document.querySelector('.variantBTN')

    variant.innerHTML = `Составить вариант (Выбрано заданий: 0)`
    variant.disabled = true
    variant.classList.add('animation:hover')
}

// Смена кнопки "Вариант"
function changeBtnVariant(){
    const variant = document.querySelector('.variantBTN')
    const arrayCountProblem = pushArrayCountProblem()
    const summProblems = summArray(arrayCountProblem)

    variant.innerHTML = `Составить вариант (Выбрано заданий: ${summProblems})`
    variant.disabled = summProblems === 0

    for (let i = 1; i <= 11; i++) {
        if (+problems[i].length < arrayCountProblem[i]) variant.disabled = true
    }

    variant.disabled ? variant.classList.add('boom') : variant.classList.remove('boom')
}

// Доп функция для времени 1
function timeToArray(time){
    let timeNew = ''
    let index = 0
    let flag = true

    while (flag) {
        timeNew += time[index]
        index += 1

        if (time[index] === ' ') flag = false
    }
    timeNew = timeNew.split(':')
    let timeArray = []
    timeNew.forEach((element, index) => {if (index < 3) timeArray.push(Number(element))})
    return timeArray
}

// Доп функция для времени 2
function deadLine(time){
    const hoursMinuteSecondArray = timeToArray(time)
    return `${addZero((hoursMinuteSecondArray[0] + Number(hoursMinuteSecondArray[1] >= 30)) % 24)}:${addZero((hoursMinuteSecondArray[1] + 30) % 60)}:${addZero(hoursMinuteSecondArray[2])}`
}

// Доп функция для времени 3
function addZero(node){ return +node < 10 ? '0' + node : node }

function titleTime(thisTime, deadLine){
    if (Number(deadLine) < 10000) Number(deadLine) += 240000
    deadLine = String(deadLine)


    thisTime = thisTime.split(':')
    deadLine = deadLine.split(':')
    if (deadLine[0] === '00' && thisTime[0] != '00') deadLine[0] = '24'

    const second = (+deadLine[0] - +thisTime[0]) * 3600 + (+deadLine[1] - +thisTime[1]) * 60 + (+deadLine[2] - +thisTime[2]) * 1
    const result = `Вариант: ${addZero(parseInt(second / 60))}:${addZero(second % 60)} осталось`
    return second > 0 ? result : 'Время закончилось!' 
}

function deadLineNew(){
    const date = new Date();
    let thisTime = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
    let deadLine = getLocalStorage('deadLine')

    thisTime = +thisTime.replaceAll(':', '')
    deadLine = +deadLine.replaceAll(':', '')
    if (deadLine < 10000 && thisTime > 10000) deadLine += 240000
    return deadLine - thisTime <= 0
}

function time(allProblemsMain){
    const acceptBtn = document.querySelector('.accept')
    
    let answer = []
        const timePlace = document.querySelector('.time')
        const datetime = {
        month: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
        day: ['Воскрсенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        show: function(node) {
            let flagTest = true
            const _this = this;
            setInterval(function() {
                const title = document.querySelector('.titleVariant')
                const date = new Date();
                const text = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())} ${date.getDate()} ${_this.month[date.getMonth()]} ${date.getFullYear()}`
                if (flagTest && getLocalStorage('againVariant') === 'deadLinePicked'){

                    title.innerHTML = titleTime(`${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`, getLocalStorage('deadLine'))

                    node.innerHTML = text + `, дедлайн: ${getLocalStorage('deadLine')}`
                }
                // Конец дедлайна
                while (getLocalStorage('againVariant') != 'afk ' && deadLineNew() && !getLocalStorage('flagEndVariant')){
                    const title = document.querySelector('.titleVariant')
                    title.innerHTML = 'ВРЕМЯ ВЫШЛО'

                    alert('Время закончилось!')

                    // Убираем timePlace и inputVariant - все HTML поля input
                    timePlace.innerHTML = 'Для повторного прохождения этого варианта обновите страницу'
                    const inputVariant = [...document.getElementsByClassName('input')]
                    
                    // answer - список ответов
                    inputVariant.forEach(element => answer.push(element.value))
                    let rightAnswers = 0

                    // Считаем кол-во правильных ответов
                    answer.forEach((element, index) => {
                        if (element != ''){ 
                            if (element.replace(',', '.') === String(allProblemsMain[index].answer)){
                                rightAnswers ++
                                background('green', index)
                            } else background('red', index)
                        } else background('red', index)
                    })

                    acceptBtn.disabled = true


                    for (let i = 0; i < answer.length ; i ++) inputVariant[i].readOnly = true
                    alert(` Всего заданий: ${answer.length} \n Выполнено заданий: ${rightAnswers} \n Не выполнено заданий: ${answer.length - 
                        rightAnswers} \n Процент выполнения: ${rounded(rightAnswers / answer.length * 100)}% \n Вторичных баллов: ${secondBallArray[rightAnswers]}`)

                    flagTest = false

                    setLocalStorage('againVariant', 'afk')
                    setLocalStorage('flagEndVariant', 'что-то')

                    title.innerHTML = 'Результат'


                }
            }, 250);
        }
    }

    const date = new Date();
    const t = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())} ${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`;
    if (!getLocalStorage('deadLine') || getLocalStorage('againVariant') != 'deadLinePicked'){
        setLocalStorage('deadLine', deadLine(t))
        setLocalStorage('againVariant', 'deadLinePicked')
    }

    timePlace.innerHTML += deadLine(t)

    window.onload = function() {
        datetime.show(timePlace);
    }
}
