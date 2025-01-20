import { usePage } from "@inertiajs/vue3";
function makeMoney(amount) {
  return usePage().props.storeSettings.store_currency_symbol + amount;
}
export {
  makeMoney as m
};
