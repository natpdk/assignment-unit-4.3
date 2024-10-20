console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []
const maxItems = 5

function addItem(item) {
    console.log('New Item: ', item);
    if (basket.length < maxItems) {
        basket.push(item);
        return true
    }
    else if (basket.length >= maxItems) {
        return false
    }
} //end addItem

console.log(`Basket is: ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now: ${basket}`);

console.log(`Basket i: ${basket}`);
console.log('Adding bananas (expect true)', addItem(' bananas'));
console.log(`Basket is now: ${basket}`);

console.log(`Basket is: ${basket}`);
console.log('Adding oranges (expect true)', addItem(' oranges'));
console.log(`Basket is now: ${basket}`)

function listItems() {
    for (i = 0; i < basket.length; i++) {
        console.log(basket)
    }
} //end listItems

function empty() {
    basket.length = 0
} //end empty


function isFull() {
    if (basket.length === maxItems) {
        return true;
    }
    else {
        return false;
    }
}


function removeItem(item){
        const index = basket.indexOf(item);
        if (index !== -1) {
          basket.splice(index, 1);
        }
        return basket;
}
console.log( 'Remove item: ', removeItem('bananas'))
console.log( basket )




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch (e) {
    // Do nothing
}
