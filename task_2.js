let newStr = prompt ('Придумай предложение');

const createStr = (newStr) => {
    let str = newStr;
    return str[0].toUpperCase() + str.slice(1);
}

alert (createStr(newStr));