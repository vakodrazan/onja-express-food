const addListBtn = document.querySelector('.add-order');
const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');
const detail = document.querySelector(".details");
const deleteOrder = document.querySelector('.served');
const order = document.querySelector(".order");
const orderList = document.querySelector('.order-list');



// Create a funtion that contains the form element
const handleAddListBtn = (e) => {
    const myFormHtml = `
        <form>
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

// Listen to the outside of the element to close the modal
outerModal.addEventListener('click', event => {
    const isOutside = !event.target.closest('.inner-modal')
    if (isOutside) {
        outerModal.classList.remove('open');
    }
});


// listen to the escape key to close the modal
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        outerModal.classList.remove('open');
    }
});

addListBtn.addEventListener('click', handleAddListBtn);

//create an event delegation for the inner button
window.addEventListener('submit', event => {
    event.preventDefault();
    const formInput = event.target;
    const userName = formInput.name.value;
    const dish = formInput.dish.value;
    const size = formInput.size.value;
    const amount = formInput.amount.value;

    // when clicking the submit button listen for all the element inside of form
    if (formInput.matches("form")) {
        const myHtml = `
            <div class="order" data-dish="${dish}" data-size="${size}" data-amount="${amount}">
                <span class="title">
                    ${userName}
                </span>
                <button class="details">Details</button>
                <button class="served">Delete order</button>
            </div>
        `;
        // append child with the order list
        orderList.insertAdjacentHTML('beforeend', myHtml);
    }
});