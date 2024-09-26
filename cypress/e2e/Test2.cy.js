it.only('Using Get with Find and Eq', () => {
    cy.visit('https://www.w3schools.com/cssref/css_selectors.php')
    cy.get('table[class="ws-table-all notranslate"]').find('tr').eq(11) //используем Find когда надо получить элемент внутри элемента полученного в Get
    //используем Eq() когда нужно получить элемент по его порядковому номеру (индексация начинается с 0)
})