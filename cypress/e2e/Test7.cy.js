//запросы АПИ и тестирование их ответов, уже не E2E тестирование
//запрос и вывод ответа в лог (консоль браузера)
it('API GET request', () => {
    cy.request('https://reqres.in/api/users?page=1')
        .then((response) => {
            console.log(response) //лог всего ответа
        })
}) 

it('API POST request', () => {
    const requestBody = {
        "query": "Ан",
        "gender": "FEMALE"
    };
    const requestHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token 793d2830a6360a1569c8e7b9dd1afeb2f57ffa77"
    };
    cy.request({
        method: "POST",
        url: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio",
        body: requestBody,
        headers: requestHeaders
        })
        .then((response) => {
            expect(response).to.have.property('status').to.eql(200) //проверка кода ответа
            expect(response.status).to.eql(200) // или так
            console.log(response.body) // лог тела ответа
            expect(response.body.suggestions[0].data.name).to.eql("Анна")
        })
        
}) 

it.only('API POST request', () => {
    const requestBody = {
        "query": "Ан",
        "gender": "FEMALE"
    };
    const requestHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token 793d2830a6360a1569c8e7b9dd1afeb2f57ffa77"
    };
    cy.request({
        method: "POST",
        url: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio",
        body: requestBody,
        headers: requestHeaders
        })
        .its('body.suggestions[0]')//its позволяет работать с объектом, который возращает предудущая функция, в данном случае это yielded в консоли
        .should('contain', {
            "value": "Анна",
        })
})