// destructing on object
const fish = {
    name: 'hilsha',
    age: 62,
    color: 'silver',
    address: 'river',
    phone: 01715763335
}

const {age, color, address} = fish;     // age, color, address is just variable same as property name of object fish (ekhane variable same hotei hobe properties er name ei)
console.log(age, color, address);


// destructing on array
const names = ['karim', 'alim', 'rahim'];
const [baba, caca, vatija] = names;       // baba, caca, vatija are just variable (ekhane variable same howa joruri na)
console.log(vatija);
console.log(baba, caca, vatija);