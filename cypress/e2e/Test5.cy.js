//разные виды действий
//ввод данных в поле
it('Type', () => {
    cy.visit('https://vk.com/')
    cy.get('input#index_email')
        .type('juicy@mail.ru')
        .should('have.value', 'juicy@mail.ru')
        .and('be.visible')
})

//фокус в поле ввода
it('Focus', () => {
    cy.visit('https://vk.com/')
    cy.get('input#index_email')
        .focus()
        .should('have.value', '')
})

//подсветка поля с ошибкой
it('Blur', () => {
    cy.visit('https://vk.com/')
    cy.get('input#index_email')
        .focus()
        .blur()
})

//очистка поля
it('Clear', () => {
    cy.visit('https://vk.com/')
    cy.get('input#index_email')
        .type('juicy@mail.ru')
        .wait(2000) //подождать 2000мс (2c)
        .clear()
})

//подтверждение - используется только для форм
it('Submit', () => {
    cy.visit('https://vk.com/')
    cy.get('form.VkIdForm__form')
        .submit() //должны подсветиться валидационные ошибки для формы
})

//check - для работы с чекбоксами и радиокнопками, uncheck - только с чекбоксами
it('Check and Uncheck', () => {
    cy.visit('https://vk.com/')
    cy.get('span.VkIdCheckbox__checkboxOn') //данный пример не работает, потому что span, должен иметь атрибут checkbox или radio
        .uncheck()
})

//выбор из списка
it('Select', () => {
    cy.visit('https://app.pooling.me/calendar')
    cy.viewport(1300, 660)
    cy.get('div[name = "carTypes"]')
        .click()
    cy.get('div[name = "carTypes"] span.description') //или cy.contains('span[class = "description"]', 'Изотерм')??
        .click() //.select('Изотерм') тут просто указываем значение, которое нужно выбрать из списка, не могу использовать, потому что должен быть атрибут select
    cy.get('input[value="Alco"]')
        .check({force: true}) //force true используется, потому что какой-то другой элемент закрывает нужный
})

//прокрутка страницы к элементу
it('Scroll into View', () => {
    cy.visit('https://vk.com/')
    cy.contains('a[class = "footer_lang_link"]', 'English')
        .scrollIntoView()
})

//прокрутка страницы к коородинатам
it('Scroll to', () => {
    cy.visit('https://vk.com/')
    cy.contains('a[class = "footer_lang_link"]', 'English')
    cy.scrollTo(0, 700) //в пикселях
})

//триггер к действию
it.only('Scroll to', () => {
    cy.visit('https://app.pooling.me/calendar')
    cy.viewport(1300, 660)
    cy.get('button#ftlLandingPageHeaderButton')
        .wait(2000)
        .trigger('mouseover')
})
