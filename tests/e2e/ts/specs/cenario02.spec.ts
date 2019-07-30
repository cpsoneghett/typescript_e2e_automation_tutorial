import { browser } from "protractor";
import { InicioPage } from "../pages/inicio.page";

describe('Teste cenário 02 - Funcionalidades gerais', () => {

    var Inicio: InicioPage = new InicioPage(); //Declaramos uma instância da nossa página aqui!


    it('Soma dois números (no caso, 1 e 3)', () => {

        Inicio.realizaOperacao('+', 1, 3);
        expect(Inicio.resultado.getText()).toEqual('4');
    });

    it('Valida inclusão no histórico', () => {

        expect(Inicio.historico.count()).toEqual(1);
    });

    it('Realiza o módulo de dois números (5 e 2)', () => {

        Inicio.realizaOperacao('%', 5, 2);
        expect(Inicio.resultado.getText()).toEqual('1');
    });
});
