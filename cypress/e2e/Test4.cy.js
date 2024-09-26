//ввод значения в импут и проверка этого значения
it('Using Should', () => {
    cy.visit('https://vk.com/')
    cy.get('input#index_email')
        .type('juicy@mail.ru')
        .should('have.value', 'juicy@mail.ru')
        .and('be.visible')
})

//то же самое, только через функцию Expect
it('Using Expect', () => {
    cy.visit('https://vk.com/')
    cy.get('input#index_email')
        .type('juicy@mail.ru').then ( input => {
            expect(input).to.have.value('juicy@mail.ru')
        }
        )
})

//проверка, что элемент активен checked
it('Using Should', () => {
    cy.visit('https://app.pooling.me/reservations')
    cy.get('input[name = "Reservations"]')
        .should('be.checked')
})

//проверка, что после клика появляется новый элемент
it('Using Should', () => {
    cy.visit('https://app.pooling.me/calendar')
    cy.contains('div[class = "divider text"]', 'АО «Тандер»') //элемент над которым совершается действие что-то содержит
        .trigger('click') //само действие, mouseover - наведение на элемент
        .get('span.text') //элемент, который должен появиться
        .should('be.visible')
})

//проверка, что у элемента есть определенный атрибут
it('Using Should', () => {
    cy.visit('https://app.pooling.me/calendar')
    cy.contains('button#ftlLandingPageHeaderButton', 'Догрузить свою машину') //элемент
        .should('have.attr', 'href') //есть атрибут href
        .and('match', /pooling.me/) //с помощью регулярки тут можно указать значение
})

//проверка, URL верный
it.only('Using Should', () => {
    cy.visit('https://app.pooling.me/calendar')
    cy.url()
        .should('eq', 'https://app.pooling.me/calendar')
})