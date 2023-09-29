it.only('Using Get with Find and Eq', () => {
    cy.visit('https://www.w3schools.com/cssref/css_selectors.php')
    cy.get('table[class="ws-table-all notranslate"]').find('tr').eq(11)
})