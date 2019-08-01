import { browser } from "protractor";
import { ContentType } from "jasmine-allure2-reporter"
import { allureReporter } from "../conf"

export class Reports {

    public static tiraPrint() {

        browser.takeScreenshot().then((png) => {
            allureReporter.getInterface().createAttachment(
                'Screenshot',
                Buffer.from(png, 'base64'),
                ContentType.PNG);
        });
    };

}