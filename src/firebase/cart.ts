import { collection, addDoc, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase/config";
import { TProduct } from "../types/product.type";

export const addToCart = async (productId: string, quantity: number) => {
  try {
    console.log(`Adding product to cart. Product ID: ${productId}`);

    const productSnapshot = await getDocs(query(collection(firestore, "products"), where("id", "==", productId)));

    console.log('Product Snapshot:', productSnapshot.docs);

    const productDoc = productSnapshot.docs[0];

    if (!productDoc) {
      console.error(`Error: Product with ID ${productId} not found or has missing data.`);
      throw new Error(`Error: Product with ID ${productId} not found or has missing data.`);
    }

    const productIdFromDoc = productDoc.id;

    const existingCartSnapshot = await getDocs(query(collection(firestore, "carts"), where("product.id", "==", productIdFromDoc)));
    // const existingCartSnapshot = await getDocs(query(collection(firestore, "carts"), where("product.id", "==", productIdFromDoc), where("userId", "==", userId)));
    console.log('Existing Cart Snapshot:', existingCartSnapshot.docs);
    const existingCartDocs = existingCartSnapshot.docs;

    if (existingCartDocs.length > 0) {
      const existingCartItem = existingCartDocs[0];
      const existingCartId = existingCartItem.id;

      await updateDoc(doc(firestore, "carts", existingCartId), {
        quantity: existingCartItem.data().quantity + quantity,
      });
    } else {
      await addDoc(collection(firestore, "carts"), {
        // userId: userId,
        product: {
          id: productIdFromDoc,
          ...productDoc.data(),
        },
        quantity,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }
  } catch (error) {
    console.error(`Error adding to cart: ${error.message}`);
    throw error;
  }
};

export const fetchCartData = async () => {
  try {
    const cartSnapshot = await getDocs(collection(firestore, 'carts'));
    const updatedCart = cartSnapshot.docs.map(doc => {
      const productData = doc.data().product;

      if (productData && productData.id) {
        return {
          id: productData.id,
          bestSeller: productData.bestSeller,
          brand: productData.brand,
          category: productData.category,
          description: productData.description,
          image: productData.image,
          name: productData.name,
          price: productData.price,
          stock: productData.stock,
        };
      } else {
        throw new Error('Error: Product data or id is undefined');
      }
    });

    const filteredCart = updatedCart.filter(cart => cart !== null) as TProduct[];

    return filteredCart;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
