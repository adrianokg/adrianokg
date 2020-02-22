const BASE_URL = 'https://akg-message.herokuapp.com/';

const getMessages = async () => {
    try {
        const res = await axios.get(`${BASE_URL}`);

        return res.data;
    } catch (e) {
        console.error(e);
    }
};

const createItem = message => {
    const url = message.message;

    const item = `
        <div class='item'>
            <div class='date'>
                ${message.created_at}
            </div>
            <div class='message'>
                <a target='_blank' href='${url}'>
                    ${url}
                </a>
            </div
        </div>
    `;

    return item;
};

const listMessages = messages => {
    const messages_list = document.getElementById('messages-list');

    if (messages.length > 0) {
        messages.map(message => {
            messages_list.innerHTML += createItem(message);
        });
    };
}

const form = document.getElementById('form-message');

form.addEventListener('submit', async event => {
    event.preventDefault();

    const message = document.querySelector('#message').value;

    if (message) {
        document.querySelector('#message').value = "";

        try {
            const res = await axios.post(`${BASE_URL}`, {
                message: message,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        } catch (e) {
            console.error(e);
        }
    }
});

const main = async () => {
    listMessages(await getMessages());
};

main();
