let friends = ['Leonardo', 'jack', 'roses', 'johnny', 'oishye' ];
const getArray = (friends) => {
let newArray =[];
    for(const friend of friends) {
        if(friend.length % 2 == 0){
            newArray.push(friend);
        }
    }
    return newArray;
} 
console.log(getArray(friends));