import { usePage } from "@inertiajs/vue3";

export function makeMoney(amount) {
    return usePage().props.storeSettings.store_currency_symbol + amount;
}
