import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

import { db, auth } from "../firebase";

/*
|--------------------------------------------------------------------------
| Collection Reference
|--------------------------------------------------------------------------
*/

const getScriptsCollection = () => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User is not authenticated.");
  }

  return collection(db, "users", user.uid, "scripts");
};

/*
|--------------------------------------------------------------------------
| Save Script
|--------------------------------------------------------------------------
*/

export const saveScript = async (scriptData) => {
  try {
    const docRef = await addDoc(getScriptsCollection(), {
      ...scriptData,
      favorite: false,
      archived: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return docRef.id;
  } catch (error) {
    console.error("Save Script Error:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get All Scripts
|--------------------------------------------------------------------------
*/

export const getScripts = async () => {
  try {
    const q = query(
      getScriptsCollection(),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Get Scripts Error:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Get Single Script
|--------------------------------------------------------------------------
*/

export const getScript = async (id) => {
  try {
    const scriptRef = doc(db, "users", auth.currentUser.uid, "scripts", id);

    const snapshot = await getDoc(scriptRef);

    if (!snapshot.exists()) return null;

    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  } catch (error) {
    console.error("Get Script Error:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Update Script
|--------------------------------------------------------------------------
*/

export const updateScript = async (id, updates) => {
  try {
    const scriptRef = doc(db, "users", auth.currentUser.uid, "scripts", id);

    await updateDoc(scriptRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Update Script Error:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Delete Script
|--------------------------------------------------------------------------
*/

export const deleteScript = async (id) => {
  try {
    const scriptRef = doc(db, "users", auth.currentUser.uid, "scripts", id);

    await deleteDoc(scriptRef);
  } catch (error) {
    console.error("Delete Script Error:", error);
    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| Toggle Favorite
|--------------------------------------------------------------------------
*/

export const toggleFavorite = async (id, favorite) => {
  return updateScript(id, {
    favorite,
  });
};

/*
|--------------------------------------------------------------------------
| Toggle Archive
|--------------------------------------------------------------------------
*/

export const toggleArchive = async (id, archived) => {
  return updateScript(id, {
    archived,
  });
};