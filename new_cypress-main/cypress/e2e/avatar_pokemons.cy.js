describe('Покемоны', function () {

    it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.ru/login'); // Заходим на сайт
        cy.get('#k_email').type('USER_LOGIN') // Вводим логин
        cy.get('#k_password').type('USER_PASSWORD') // Вводим пароль
        cy.get('.MuiButton-root').click(); // Нажимаем войти
        cy.wait(2000); // Ждем 2 секунды
        cy.get('.header_card_trainer').click(); //Нажимаем на айди своего тренера
        cy.wait(2000); // Ждем 2 секунды
        cy.get('.k_mobile > :nth-child(5)').click(); // Нажимаем сменить аватар
        cy.get('.available > button').first().click(); // Нажимаем купить
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996') // Вводим номер карты
        cy.get(':nth-child(1) > .style_1_base_input').type('1226') // Вводим срок действия карты
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125') // Вводим код
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('german dolnikov') // Вводим имя владельца карты
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажимаем оплатить
        cy.get('.style_1_base_input').type('56456') // Вводим код смс
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажимаем оплатить
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // Проверяем, что покупка прошла успешно


    })
    
})



