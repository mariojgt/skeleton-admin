import { useRecaptcha } from '../Composable/useRecaptcha';

export const vRecaptcha = {
    mounted(el: HTMLElement, binding: any) {
        const { getToken } = useRecaptcha();
        const action = binding.value || el.getAttribute('data-action') || 'submit';

        if (el.tagName === 'BUTTON' || el.tagName === 'FORM') {
            el.addEventListener(el.tagName === 'FORM' ? 'submit' : 'click', async (e) => {
                e.preventDefault();

                const token = await getToken(action);
                if (token) {
                    // Add token to form if it's a form
                    if (el.tagName === 'FORM') {
                        const input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = 'recaptcha_token';
                        input.value = token;
                        el.appendChild(input);
                        el.submit();
                    } else {
                        // Trigger the original click handler with the token
                        el.dispatchEvent(new CustomEvent('recaptcha-success', {
                            detail: { token }
                        }));
                    }
                }
            });
        }
    }
};
