import { getLocalStorage, removeLocalStorage } from "./LocalStorage.js"
import { getArrayObjectForSpecialVariants, randomVariant, getAvgProcentVariant } from "./VariantFunctions.js"
import { specialVariants } from "./Base.js"
import { getSpecialObject } from "./OtherFunctions.js"


function getMyVariantPrevious(){
    let myVariantPrevious = null
    const idPreviousVariant = getLocalStorage('idVariant') // id Варианта (прошлый вариант)
    const allStats = getLocalStorage('stats') // Вся статистика

    if (idPreviousVariant !== null) {
        allStats.forEach(variant => {
            if (variant.idVariant === idPreviousVariant) myVariantPrevious = variant
        })
    }

    return myVariantPrevious
}




function getArrayCountProblem(){
    let arrayCountProblem
    const myVariantPrevious = getMyVariantPrevious()
    const numberVariant = getLocalStorage('numberVariant')

    if (getLocalStorage('fromStats') !== null) { // Если из статистики
        arrayCountProblem = myVariantPrevious.countProblem

    } else {
        if (numberVariant === 0) arrayCountProblem = getLocalStorage('countProblem') // Если рандом
        if (numberVariant === -1) arrayCountProblem = getLocalStorage('countProblem') // Если из special
        if (numberVariant > 0) arrayCountProblem = specialVariants[numberVariant].countProblem // Если специальный вариант
    }
    

    return arrayCountProblem
}




function getAllProblemMain(){
    let allProblemsMain
    const myVariantPrevious = getMyVariantPrevious()
    const arrayCountProblem = getArrayCountProblem()
    const numberVariant = getLocalStorage('numberVariant')



    if (getLocalStorage('variant')){ // Если уже есть вариант

        allProblemsMain = getLocalStorage('variant') // Массив заданий при обновлении   
        if (getLocalStorage('againVariant') === 'afk' && (getLocalStorage('endVariant') + getLocalStorage('fromStats') === 0)) removeLocalStorage('answers') // Стирание ответов при новом старом вариате
    
    } else { // Создание варианта
        if (getLocalStorage('fromStats') !== null) { // Если только создался (просматриванием варианта)
            allProblemsMain = myVariantPrevious.problems
        } else {
            if (numberVariant === 0) allProblemsMain = randomVariant(arrayCountProblem) // Если только создался (кнопкой создания варианта)
            if (numberVariant === -1) allProblemsMain = getSpecialObject()
            if (numberVariant > 0) allProblemsMain = getArrayObjectForSpecialVariants(numberVariant) // Если специальный вариант
        }
    }
    
    return allProblemsMain
}




function getPreviousAnswers(){
    let previousAnswers
    const myVariantPrevious = getMyVariantPrevious()


    if (getLocalStorage('answers')) previousAnswers = getLocalStorage('answers')
    else if (myVariantPrevious !== null && (getLocalStorage('endVariant') + getLocalStorage('fromStats') !== 0)) previousAnswers = myVariantPrevious.answers

    return previousAnswers
}




function getNameVariant(){
    let nameVariant
    const myVariantPrevious = getMyVariantPrevious()
    const numberVariant = getLocalStorage('numberVariant')
    const allProblemsMain = getAllProblemMain()
    
    


    if (numberVariant === 0) nameVariant = 'Тестовая часть' // Если создан рандомно
    else if (numberVariant === -1) nameVariant = 'Избранные задачи' // Если создан рандомно
    else if (getLocalStorage('fromStats') !== null) nameVariant = myVariantPrevious.name  // Если просмотр
    else nameVariant = specialVariants[numberVariant].name // Если спец вариант

    const avgVariant = getAvgProcentVariant(allProblemsMain)
    nameVariant += ` (Сложность варианта: ${avgVariant}%)`

    return nameVariant
}




function getIsVariant(){
    const arrayCountProblem = getArrayCountProblem()

    return arrayCountProblem.every(element => element === '-' || element === 1)
}





// currSubject

function getParentForCurrSubject(event){
    let parent

    if (event.target) parent = event.target.closest('.conteyner') // Родители кнопки
    else parent = document.activeElement.closest('.conteyner')

    return parent
}



export { getMyVariantPrevious, getArrayCountProblem, getAllProblemMain, getPreviousAnswers, getNameVariant, getIsVariant, getParentForCurrSubject }