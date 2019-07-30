import { element, by } from "protractor";
import { Utils } from "../components/utils.component";

export class InicioPage {

    titulo = element(by.tagName('h3'));
    operacoesCombobox = element(by.model('operator')); // Incluído o mapeamento do combobox de operacoes

    primeiraParcela = element(by.model('first'));
    segundaParcela = element(by.model('second'));
    historico = element.all(by.repeater('result in memory'));
    resultado = element(by.binding('latest'));
    gobutton = element(by.id('gobutton'));

    realizaOperacao(operacao: string, x: number, y: number) {

        Utils.escolherOperacaoPorTexto(this.operacoesCombobox, operacao);

        this.primeiraParcela.sendKeys(x);
        this.segundaParcela.sendKeys(y);
        this.gobutton.click();
    };

};