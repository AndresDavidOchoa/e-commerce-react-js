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
  { title: 'Fifa 23', category: 'nintendo', description: 'Videojuego de deportes', price: 100, pictureUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/0515/MkbqF5veMFZnmQRtsbmQoNZT.png', stock: 100 },
  { title: 'Animal crossing', category: 'nintendo', description: 'simulación de vida', price: 100, pictureUrl: 'https://th.bing.com/th/id/OIP.SaqeTnqjgOzHuIfMcSx1KQHaHa?pid=ImgDet&rs=1', stock: 100 },
  { title: 'God of war', category: 'psn', description: 'Acción-aventura', price: 100, pictureUrl: 'https://image.api.playstation.com/vulcan/img/rnd/202011/1021/X3WIAh63yKhRRiMohLoJMeQu.png', stock: 100 },
  { title: 'The last of us', category: 'psn', description: 'Acción-aventura', price: 100, pictureUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png', stock: 100 },
  { title: 'Halo infinite', category: 'xbox', description: 'Acción-aventura', price: 100, pictureUrl: 'https://th.bing.com/th/id/OIP.zzE0n-TzlslYrogiUiqRUQAAAA?pid=ImgDet&rs=1', stock: 100 },
  { title: 'Red dead redemption 2', category: 'xbox', description: 'Acción-aventura western', price: 100, pictureUrl: 'https://assets.vg247.com/current/2018/05/red_dead_redemption_2_cover_art_1.jpg', stock: 100 },
  { title: 'Elden ring', category: 'xbox', description: 'Souls-like', price: 100, pictureUrl: 'https://www.gameinformer.com/sites/default/files/styles/product_box_art/public/2021/06/11/ae21622c/eldenring.jpg', stock: 100 }
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



