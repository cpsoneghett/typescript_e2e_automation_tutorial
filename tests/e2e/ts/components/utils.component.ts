import { ElementArrayFinder, element, by, ElementFinder } from "protractor";


export class Utils {

    static escolherOperacaoPorIndice(combobox: ElementFinder, index = 0) {

        combobox.click();
        var opcoes: ElementArrayFinder = element.all(by.tagName('option'));

        opcoes.get(index).click();
    }

    static async escolherOperacaoPorTexto(combobox: ElementFinder, texto: string) {

        combobox.click();
        var opcoes: ElementFinder[] = await element.all(by.tagName('option'));

        for (var opcao of opcoes) {
            var s = await opcao.getText();
            if (s === texto)
                opcao.click();
        }
    }
}