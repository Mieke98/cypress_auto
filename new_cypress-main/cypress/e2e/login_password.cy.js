import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"


describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/'); // Зашли на сайт
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверили цвет строки
        cy.get(result_page.footer).trigger('mouseover') // Проверили эффект наведения
            });

    it('Верный пароль и верный логин', function () {
         cy.get(main_page.email).type(data.login); // Написали логин
         cy.get(main_page.password).type(data.password); // Написали пароль
         cy.get(main_page.login_button).click(); // Нажали на кнопку "Войти"
         cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверили, что получили нужный текст
         cy.get(result_page.close).should('be.visible'); // Проверили, что пользователи видят крестик
            })

    it('Восстановление пароля', function () {
         cy.get(main_page.fogot_pass_btn).click(); // Нажали "Забыли пароль"
         cy.get(recovery_password_page.email).type(data.login); // Написали имеил
         cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // Проверили, что получили нужный текст
         cy.get(result_page.close).should('be.visible'); // Проверили, что пользователи видят крестик
             })

    it('Неверный пароль', function () {
         cy.get(main_page.email).type(data.login); // Написали логин
         cy.get(main_page.password).type('iLoveqastudio1234'); // Написали неверный пароль
         cy.get(main_page.login_button).click(); // Нажали на кнопку "Войти"
         cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверили, что получили нужный текст
         cy.get(result_page.close).should('be.visible'); // Проверили, что пользователи видят крестик
            })
    
    it('Неверный логин', function () {
         cy.get(main_page.email).type('germ@dolnikov.ru'); // Написали неверный логин
         cy.get(main_page.password).type(data.password); // Написали верный пароль
         cy.get(main_page.login_button).click(); // Нажали на кнопку "Войти"
         cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверили, что получили нужный текст
         cy.get(result_page.close).should('be.visible'); // Проверили, что пользователи видят крестик
            })

    it('Логин без @', function () {
         cy.get(main_page.email).type('germandolnikov.ru'); // Написали логин без @
         cy.get(main_page.password).type(data.password); // Написали верный пароль
         cy.get(main_page.login_button).click(); // Нажали на кнопку "Войти"
         cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Проверили, что получили нужный текст
         cy.get(result_page.close).should('be.visible'); // Проверили, что пользователи видят крестик
            })

    it('Приведение к строчным буквам в логине', function () {
         cy.get(main_page.email).type('GerMan@Dolnikov.ru'); // Написали логин с заглавными буквами
         cy.get(main_page.password).type(data.password); // Написали верный пароль
         cy.get(main_page.login_button).click(); // Нажали на кнопку "Войти"
         cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверили, что получили нужный текст
         cy.get(result_page.close).should('be.visible'); // Проверили, что пользователи видят крестик
    })
    
})
