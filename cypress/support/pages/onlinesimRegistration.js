export class OnlinesimRegistration {  //создаем класс, который будет содержать определенную реализацию
    typeEmail(email){ //оборачиваем первый шаг в функцию
        cy.get('input[placeholder="E-mail"]')
            .type(email)
    }
    typePassword(password){ //оборачиваем второй шаг в функцию и т.д.
        cy.get('input[placeholder="Пароль"]')
            .type(password)
        cy.get('input[placeholder="Повторите пароль"]')
            .type(password)
    }
    clickCountrySelector(){ 
        cy.get('button[class="input-select close"]')
            .click()
    }
    chooseSecondcountry(){ 
        cy.get('ul[class="input-select-list-block"]').find('li[class="input-select-list-block-item"]').eq(0)  //cy.contains('div', 'Казахстан')
            .click()
    }
    checkBoxOn(){ 
        cy.get('span[class = "check-box__checkmark"]')
            .click()
    }
    clickRegistration(){ 
        cy.get('button[class="btn btn--blue btn--register"]')
            .click()
    }
    pageOpeningCheck(text){ //проверка, что открылась другая страница
        cy.get('span[class="small on-rts"]')
            .should('contain.text', text)
    }
    pageVisit(url){
        cy.visit(url)
    }
    
}

export const onlinesimRegistration = new OnlinesimRegistration() //создаем объект (экземпляр класса)
