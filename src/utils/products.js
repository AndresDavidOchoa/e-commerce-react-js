export const products = [
    { id: 1, title: 'Persona 5', description: 'Game', price: 100, pictureUrl: 'https://image.api.playstation.com/vulcan/img/cfn/11307XlqDFlHmHWGjBPndSappCDTnE9OmnP2P-dSzcvLX9i0pvH_okJOl6dP1AnZefxthD-2k3RrsdzYU_BqUy9K5_sv-Tnx.png', stock: 'number' },
    { id: 2, title: 'Zelda', description: 'Game', price: 100, pictureUrl: 'https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg', stock: 'number' },
    { id: 3, title: 'Fifa 23', description: 'Game', price: 100, pictureUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/0515/MkbqF5veMFZnmQRtsbmQoNZT.png', stock: 'number' },
    { id: 4, title: 'God of war', description: 'Game', price: 100, pictureUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202011/1021/X3WIAh63yKhRRiMohLoJMeQu.png', stock: 'number' }
]

export const getProducts = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(products);
        }, 2000)
    })

    return promise
}

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
        const result = products.find((product) => product.id === id)
        setTimeout(() => {
            return resolve(result);
        }, 2000)
    })

    return promise
}