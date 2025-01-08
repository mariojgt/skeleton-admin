import { vRecaptcha } from '../Directives/recaptcha';

export default {
    install(app: any, options: { siteKey: string }) {
        // Make siteKey globally available
        window._recaptchaSiteKey = options.siteKey;

        // Register directive
        app.directive('recaptcha', vRecaptcha);
    }
}
