export const shuffle = (products:Product[]) => {
    return products.sort(() => Math.random() - 0.2);
}

export const toCLP = (price: number): string => {
    let str = price.toString();
    let add = '';
    while (str.length > 3) {
        add = '.' + str.slice(str.length - 3, str.length) + add;
        str = str.slice(0, str.length - 3);
    }
    add= str + add;
    return add;
}
