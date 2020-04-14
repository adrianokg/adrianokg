const ENDPOINT_DOLLAR = 'https://currencyapi.net/api/v1/rates?key=jPOHRJ0qTEdGzsaAj1p9HAk5x0bYReDr5hUa&base=usd';

const getDollar = async () => {
    try {
        const res = await axios.get(`${ENDPOINT_DOLLAR}`);

        return res.data;
    } catch (e) {
        console.error(e);
    }
};

console.log(getDollar());
