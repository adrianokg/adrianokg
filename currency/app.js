const ENDPOINT_DOLLAR = 'https://currencyapi.net/api/v1/rates?key=jPOHRJ0qTEdGzsaAj1p9HAk5x0bYReDr5hUa&base=USD';
const ENDPOINT_EURO = 'http://data.fixer.io/api/latest?access_key=cdb26f9ad343fc84e401e09a597128a4';

const getDollar = async () => {
    try {
        const res = await axios.get(`${ENDPOINT_DOLLAR}`);

        return res.data;
    } catch (e) {
        console.error(e);
    }
};

const getEuro = async () => {
    try {
        const res = await axios.get(`${ENDPOINT_EURO}`);

        return res.data;
    } catch (e) {
        console.error(e);
    }
};

var main = document.getElementById('main');
var dollarValue = document.getElementById('dollar-value');
var euroValue = document.getElementById('euro-value');

Promise.resolve(getDollar()).then(function(data) {
    dollarValue.innerHTML = data.rates.BRL;
});

Promise.resolve(getEuro()).then(function(data) {
    euroValue.innerHTML = data.rates.BRL;
});
