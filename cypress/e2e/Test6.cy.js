//шаблон проектирования Page Object
//первый кейс - выглядит большим и плохочитаемым
it('Page Object case1', () => {
    cy.visit('https://onlinesim.io/ru/auth/register?')
    cy.get('input[placeholder="E-mail"]')//пишем шаги для кейса
        .type('av.mozhina+1@gmail.com')
    cy.get('input[placeholder="Пароль"]')
        .type('12qwerty!')    
    cy.get('input[placeholder="Повторите пароль"]')
        .type('12qwerty!')   
    cy.get('button[class="input-select close"]')
        .click()
    cy.contains('div', 'Российская Федерация')
        .click()
    cy.get('input[name = "phone"]')
        .type(195050333)
    cy.get('span[class = "check-box__checkmark"]')
        .click()
    cy.get('button[class="btn btn--white"]')
        .click()     
    cy.get('input[placeholder="Код подтверждения"]') //тут уже пошла проверка, что шаги привели к результату
        .should('be.visible')
})

import { onlinesimRegistration  } from "../support/pages/onlinesimRegistration.js" //импорт экземпляра объекта из pages
//второй кейс, шаги в котором повторяют шаги первого кейса
it.only('Page Object case2', () => {
    onlinesimRegistration.pageVisit('https://onlinesim.io/ru/auth/register?')
    onlinesimRegistration.typeEmail('av.mozhina+7@gmail.com')//первый шаг 
    onlinesimRegistration.typePassword('12qwerty!') //второй шаг и т.д.
    onlinesimRegistration.clickCountrySelector()
    onlinesimRegistration.chooseSecondcountry()
    onlinesimRegistration.checkBoxOn()
        cy.wait(2000)
    onlinesimRegistration.clickRegistration()
    onlinesimRegistration.pageOpeningCheck('Receive SMS') //проверка выполенения кейса
})


//1. mail необходимо каждый раз обновлять перед запуском, нужно сделать так, чтобы он инкрементился сам
//2. иногда кнопка Зарегестрировать не ведет сразу на нужный url, а только через капчу, надо ее обходить
//3. вынести куда-то переменные, особенно константы