import { ref } from 'vue';

export function useRecaptcha() {
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    const getToken = async (action: string): Promise<string | null> => {
        isLoading.value = true;
        error.value = null;

        try {
            return await new Promise((resolve) => {
                grecaptcha.enterprise.ready(async () => {
                    try {
                        const token = await grecaptcha.enterprise.execute(
                            window._recaptchaSiteKey,
                            { action }
                        );
                        resolve(token);
                    } catch (e) {
                        error.value = 'Failed to get reCAPTCHA token';
                        resolve(null);
                    }
                });
            });
        } catch (e) {
            error.value = 'reCAPTCHA initialization failed';
            return null;
        } finally {
            isLoading.value = false;
        }
    };

    return {
        getToken,
        isLoading,
        error
    };
}
