//поиск без указания тега не работает
it('Using Contains', () => {
    cy.visit('https://vk.com/')
    cy.viewport(1100, 660)
    cy.contains('Войти')
})

//поиск с указанием тега работает
it('Using Contains', () => {
    cy.visit('https://vk.com/')
    cy.viewport(1100, 660)
    cy.contains('Span', 'Войти')
})

//поиск по вхождению без учета регистра
it('Using Contains', () => {
    cy.visit('https://vk.com/')
    cy.contains('Span', 'ВОЙТИ', {matchCase: false})
})

//поиск с использованием get - может найти другой тег, так как contains приоретизирует теги input, a, button, label
it.only('Using Contains', () => {
    cy.visit('https://vk.com/')
    cy.get('span').contains('Зарегистрироваться')
})