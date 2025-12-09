import { Given, When, Then } from "@wdio/cucumber-framework";
import loginPage from "../pageobjects/login.page";

Given('Que el usuario está en la pantalla de inicio de sesión', async function () {
    // Verificamos que el input de usuario sea visible para asegurar que la app cargó
    await expect(loginPage.inputUsername).toBeDisplayed();
});

When('Ingresa el usuario {string} y la contraseña {string}', async function (usuario, contrasenia) {
    await loginPage.inputUsername.setValue(usuario);
    await loginPage.inputPassword.setValue(contrasenia);
});

When('Presiona el botón de login', async function () {
    await loginPage.btnLogin.click();
});

Then('Debería ver la pantalla de productos', async function () {
    // Como aún no tenemos mapeada la página de productos, 
    // una validación simple es asegurar que el botón de login YA NO esté visible.
    // Más adelante crearemos el "products.page.js" para validar un título.
    await expect(loginPage.btnLogin).not.toBeDisplayed();
});