import { browser } from "protractor";
import { InicioPage } from "../pages/inicio.page";



describe('Protractor Demo App', () => {

    var Inicio: InicioPage = new InicioPage();

    beforeAll(() => {
        browser.driver.get('http://juliemr.github.io/protractor-demo/');
    });

    it('Testa botão presente', () => {

        expect(Inicio.gobutton.isPresent()).toBe(true);
    });


    it('should add one and two', () => {

        Inicio.primeiraParcela.sendKeys(1);
        Inicio.segundaParcela.sendKeys(2);
        
        Inicio.gobutton.click();

        expect(Inicio.resultado.getText()).toEqual('3'); // This is wrong!
    });
});