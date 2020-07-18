const addListBtn = document.querySelector('.add-order');
const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');
const detail = document.querySelector(".details")
const deleteOrder = document.querySelector('.served')
const order = document.querySelector(".order")


const handleAddListBtn = (e) => {
    const myFormHtml = `
        <form >
            <p>Your name :</p>
            <input
                class="input-form"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name here"
                required
            />
            <p>Please select your dish :</p>
            <select name="dish" class="select-form" required>
                <option value="romazava">Romazava</option>
                <option value="koba">Koba</option>
                <option value="ravitoto">Ravitoto</option>
                <option value="mokary">Mokary</option>
                <option value="achard">Achard</option>
                <option value="masikita">Masikita</option>
                <option value="sambos">Sambos</option>
                <option value="mofo-baolina">Mofo baolina</option>
                <option value="ranonapango">Ranonapango</option>
            </select>
            <p>Please select the size of your plate :</p>
            <input type="radio" id="small" name="size" value="small" required />
            <label for="small">Small</label><br />
            <input type="radio" id="medium" name="size" value="medium" />
            <label for="medium">Medium</label><br />
            <input type="radio" id="large" name="size" value="large" />
            <label for="large">Large</label><br />
            <p>How many pieces do you want to order?</p>
            <input
                class="input-form"
                type="number"
                id="quantity"
                name="amount"
                placeholder="Enter a number here"
                required
            />
            <button class="submitOrder" type="submit">Add this order</button>
        </form>
    `;

    innerModal.innerHTML = myFormHtml;
    outerModal.classList.add('open');
}

const submitForm = (e) => {
    const form = e.currentTarget.closest('form');

    const userName = form.querySelector('[name="name"]');
    const dish = form.querySelector('[name="dish"]');
    const size = form.querySelector('[name="size"]');
    const amount = form.querySelector('[name="amount"]');

    form.addEventListener('submit', e => {
        e.preventDefault();
        innerModal.innerHTML = `
            <h1>${userName.value}</h1>
            <h2>Order: </h2>
            <p>${amount.value} ${size.value} ${dish.value}.</p>
            <img src="./images/bon-appetit.jpg" alt='${size.value}' />

        `;
        outerModal.classList.add('open');
    });

    form.reset();
}

outerModal.addEventListener('click', event => {
    const isOutside = !event.target.closest('.inner-modal')
    if (isOutside) {
        outerModal.classList.remove('open');
    }
});



window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        outerModal.classList.remove('open');
    }
});

const handleDetail = (e) => {
    const detail = e.currentTarget.closest('.order');

    const userName = detail.querySelector('.title').textContent;
    const dish = detail.dataset.dish;
    const size = detail.dataset.size;
    const amount = detail.dataset.amount;

    innerModal.innerHTML =`
    <h1>${userName}</h1>
    <h2>Order: </h2>
    <p>${amount} ${size} ${dish}.</p>
    
    <img src="./images/bon-appetit.jpg" alt="${dish}">
    `;

    outerModal.classList.add('open');
}

const handleDeleteBtn = () => {
    order.classList.add('hidden')
}

deleteOrder.addEventListener('click', handleDeleteBtn);
detail.addEventListener('click', handleDetail);
addListBtn.addEventListener('click', handleAddListBtn);
window.addEventListener('click', submitForm)