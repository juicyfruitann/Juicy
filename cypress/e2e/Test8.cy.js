// моки и стабы
// в текстурах будет json, который будет приходить вместо реального ответа
//запрос на страницу 1, ответ на страницу 2

beforeEach('setup success response with stub', () => { // прекондишен
    cy.intercept('https://reqres.in/api/users?page=1', 
        {fixture: 'Responses/page2.json'}) // первый аргумент - что подменяем(урл), второй - на что подменяем (фикстура)

    cy.intercept('https://onlinesim.io/api/v1/free_numbers_content/countries_info?', 
        {fixture: 'Responses/success.json'})

}) 

it('API GET request', () => {
    cy.request('https://reqres.in/api/users?page=1')
        .then((response) => {
            console.log(response) //лог всего ответа
        })
}) 

import { onlinesimRegistration  } from "../support/pages/onlinesimRegistration.js" 

it.only('USAAAAAAAAAAA', () => {
    onlinesimRegistration.pageVisit('https://onlinesim.io/ru/auth/register?')
    onlinesimRegistration.typeEmail('av.mozhina+14@gmail.com') 
    onlinesimRegistration.typePassword('12qwerty!') 
    onlinesimRegistration.clickCountrySelector()
    onlinesimRegistration.chooseSecondcountry()
    onlinesimRegistration.checkBoxOn()
        cy.wait(2000)
    onlinesimRegistration.clickRegistration()
        cy.get('div[class="services-country-btn__country-name"]')
            .should('contain.text', 'USAAAAAAAAAAA')
})

