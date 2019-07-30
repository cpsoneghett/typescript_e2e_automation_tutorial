import { Config } from 'protractor';
import { JasmineAllureReporter, AllureRuntime, AllureConfig } from 'jasmine-allure2-reporter';
import { SpecReporter } from 'jasmine-spec-reporter';

var reportsPath: string = '/report-e2e/allure-results/web-calculator';

export var allureReporter: JasmineAllureReporter = new JasmineAllureReporter(
    new AllureRuntime(
        new AllureConfig(reportsPath)
    ));

export const config: Config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',

    framework: 'jasmine',

    directConnect: true,

    suites: {
        e2e: [
            './specs/cenario01.spec.js',
            './specs/cenario02.spec.js'
        ]
    },

    // Define a URL base da aplicação 
    baseUrl: 'http://juliemr.github.io/protractor-demo/',

    // Define alguns parâmetros comuns aos testes para evitar repetições desnecessárias
    params: {

    },

    multiCapabilities: [
        {
            'browserName': 'chrome',
            'chromeOptions': {
                // Get rid of --ignore-certificate yellow warning
                // --start-maximized: inicia o chrome maximizado.
                args: [
                    //'--no-sandbox',
                    '--test-type=browser',
                    '--start-maximized'
                ],
                // Set download path and avoid prompting for download even though
                // this is already the default on Chrome but for completeness
                prefs: {
                    /*'download': {
                        'prompt_for_download': false,
                        'directory_upgrade': true,
                        'default_directory': downloadsPath
                    },*/
                    //permitir notificações
                    'profile.managed_default_content_settings.notifications': 1
                }
            },
            // Permite a execução dos testes em paralelo e define o maximo de instâncias
            // que serão executadas sumultâneamente
            /* shardTestFiles: true,
            maxInstances: 3, */
        }
    ],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 120000,
        showColors: true,
        realTimeFailure: true,
        print: function () {

        }
    },

    onPrepare: () => {

        jasmine.getEnv().addReporter(allureReporter);

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true,
                displayErrorMessages: true,
                displayFailed: true,
                displayDuration: true
            },
            summary: {
                displayStacktrace: false,
                displayErrorMessages: true,
                displaySuccessful: true,
                displayFailed: true,
                displayDuration: true
            },
            colors: {
                enabled: true
            }
        }));

        /**Irá parar de esperar pelo angular e irá nos permitir usar o protractor para 
        * testar servidores renderizados ou single page web applications não escritas com o angular framework. */
        //browser.ignoreSynchronization = true;
    }
};