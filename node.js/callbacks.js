let fruits = ["apple", "orange", "banana"]

const getfruits = () => {
    setTimeout(() => {
        fruits.forEach(data => {
            console.log(data);
        });
    }
        , 1000);
};


const postfruit = (fruit, callback) => {
    setTimeout(() => {
        fruits.push(fruit);
        callback();
    }, 2000);
};

postfruit("kiwi", getfruits);