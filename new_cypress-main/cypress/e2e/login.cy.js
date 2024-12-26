describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зайти на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввести правильный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввести правильный пароль
         cy.get('#loginButton').click(); // нажать кнопку войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно');// проверить что выводится текст
         cy.get('#messageHeader').should('be.visible');// текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');// крестик виден пользователю
     })
 })   

 it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); // зайти на сайт
    cy.get('#forgotEmailButton').click(); //нажать забыли пароль
    cy.get('#mailForgot').type('german@dolnikov.ru'); //ввести пароль
    cy.get('#restoreEmailButton').click(); // нажать кнопку отправить код
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверить что выводится текст
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
   
})

it('Авторизация с неправильным паролем', function () {
    cy.visit('https://login.qa.studio/'); // зайти на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // ввести правильный логин
    cy.get('#pass').type('iLoveqastudio17'); //ввести не правильный пароль
    cy.get('#loginButton').click(); // нажать кнопку войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет');// проверить что выводится текст
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
   
})

it('Авторизация с неправильным логином', function () {
    cy.visit('https://login.qa.studio/'); // зайти на сайт
    cy.get('#mail').type('german@dolnikof.ru'); // ввести не правильный логин
    cy.get('#pass').type('iLoveqastudio1'); //ввести правильный пароль
    cy.get('#loginButton').click(); // нажать кнопку войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет');// проверить что выводится текст
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
   
})

it('Проверка валидации', function () {
    cy.visit('https://login.qa.studio/'); // зайти на сайт
    cy.get('#mail').type('germandolnikov.ru'); // ввести логин без @
    cy.get('#pass').type('iLoveqastudio1'); //ввести правильный пароль
    cy.get('#loginButton').click(); // нажать кнопку войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// проверить что выводится текст
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
   
})


it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); // зайти на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввести логин
    cy.get('#pass').type('iLoveqastudio1'); //ввести правильный пароль
    cy.get('#loginButton').click(); // нажать кнопку войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно');// проверить что выводится текст
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
   
})