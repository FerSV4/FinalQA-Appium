import { $ } from "@wdio/globals";

class LoginPage {

    // Usamos '~' que es el atajo para Accessibility ID
    get inputUsername() {
        return $('~test-Username');
    }

    get inputPassword() {
        return $('~test-Password');
    }

    get btnLogin() {
        return $('~test-LOGIN');
    }

    // Método encapsulado para realizar el login (opcional, pero buena práctica)
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

export default new LoginPage();