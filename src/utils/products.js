import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";



export const getAllProducts = () => {
    const database = getFirestore();
    const collectionReference = collection(database, 'items');

    return getDocs(collectionReference)
        .then(snapshot => {
            const list = snapshot
                .docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
            return list;
        })
        .catch(error => console.warn(error))
};

export const getProduct = (id) => {
    const database = getFirestore();
    const itemReference = doc(database, 'items', id);
    return getDoc(itemReference)
        .then(snapshot => {
            if (snapshot.exists()) {
                const item = {
                    id: snapshot.id,
                    ...snapshot.data()
                };
                return item;
            }
        })

};

export const getProductsByCategory = (categoryId) => {
    // obtenemos la basedatos
    const database = getFirestore();

    // obtenemos la referencia a la collecion
    const collectionReference = collection(database, 'items');

    // crear query/consulta con el filtro que queremos aplicar
    const collectionQuery = query(collectionReference, where('category', '==', categoryId))

    // obtenemos los datos desde firestore
    return getDocs(collectionQuery)
        .then(snapshot => {
            if (snapshot.size === 0)
                return [];

            const list = snapshot
                .docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
            return list;
        })
        .catch(error => console.warn(error))
};

export const products = [
    { title: 'Zelda', category: 'nintendo', description: 'Game', price: 100, pictureUrl: 'https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg', stock: 'number' },
    { title: 'Fifa 23', category: 'nintendo', description: 'Game', price: 100, pictureUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/0515/MkbqF5veMFZnmQRtsbmQoNZT.png', stock: 'number' },
    { title: 'God of war', category: 'psn', description: 'Game', price: 100, pictureUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202011/1021/X3WIAh63yKhRRiMohLoJMeQu.png', stock: 'number' }
]

export const createAllProducts = async () => {
    try {
        // obtenemos la basedatos
        const database = getFirestore();

        // obtenemos la referencia a la collecion
        const collectionReference = collection(database, 'items');
        for (let i = 0; i < products.length; i++) {
            const snapshot = await addDoc(collectionReference, products[i]);
        }
    } catch (error) {
        console.warn(error)
    }
}
