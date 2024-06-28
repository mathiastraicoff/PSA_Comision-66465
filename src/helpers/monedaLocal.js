export const monedaLocal = (amount, locale = 'es-AR', currency = 'ARS') => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(amount);
};