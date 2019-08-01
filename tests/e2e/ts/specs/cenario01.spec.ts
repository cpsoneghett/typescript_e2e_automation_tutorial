import { browser } from "protractor";
import { InicioPage } from "../pages/inicio.page";
import { Reports } from "../components/reports.component";

describe(' Teste cenário 01 - Validando elementos', () => {

    var Inicio: InicioPage = new InicioPage(); //Declaramos uma instância da nossa página aqui!

    beforeAll(() => {
        browser.get('');
    });

    afterEach(function() {
        Reports.tiraPrint();
    });
    

    it("Valida nome do título", () => {

        expect(Inicio.titulo.getText()).toEqual("Super Calculator");
    });

    it("Verifica se os campos de parcela da soma existem na página", () => {

        expect(Inicio.primeiraParcela.isPresent()).toBe(true);
        expect(Inicio.segundaParcela.isPresent()).toBe(true);
    });

    it("Valida se o botão 'Go' está presente", () => {

        expect(Inicio.gobutton.isEnabled()).toBe(true);
    });

});
