const ENDPOINT_DOLLAR = 'https://api.exchangeratesapi.io/latest?base=USD';
const ENDPOINT_EURO = 'https://api.exchangeratesapi.io/latest?base=EUR';

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
