import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Fonction pour construire la configuration du reducer persisté selon l'état de rememberMe
const getPersistConfig = (rememberMe) => ({
  key: "root",
  storage,
  version: 1,
  whitelist: rememberMe ? ["user"] : [],
});

// Récupération de l'état de rememberMe depuis le localStorage
const rememberMe = localStorage.getItem("rememberMe") === "true";

// combineReducers pour ajouter d'autres slices à l'avenir
const rootReducer = combineReducers({
  user: userSlice,
});

// Construction de la configuration de persisted reducer
const persistConfig = getPersistConfig(rememberMe);

// Configuration du persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuration du store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Configuration du persistStore
export const persistor = persistStore(store);

// Fonction pour reconfigurer le persisted reducer
export const reconfigurePersistor = (rememberMe) => {
  persistor.pause();
  const newPersistConfig = getPersistConfig(rememberMe);
  const newPersistedReducer = persistReducer(newPersistConfig, rootReducer);
  store.replaceReducer(newPersistedReducer);
  persistor.persist();
};
