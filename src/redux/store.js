import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Используем localStorage
import contactsReducer from "./contactsSlice"; // Редюсер для управления контактами
import filtersReducer from "./filtersSlice"; // Редюсер для управления фильтрами

// Конфигурация для redux-persist
const persistConfig = {
  key: "contacts", // Ключ, под которым данные будут сохраняться в localStorage
  storage, // Определяем хранилище (localStorage)
  whitelist: ["items"], // Сохраняем только поле items из состояния контактов
};

// Создаём "обёрнутый" редюсер для контактов, который поддерживает сохранение
const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

// Создаём хранилище Redux
const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer, // подключили редюсер контактов с функционалом сохранения 
    filters: filtersReducer, // Обычный редюсер для фильтров (без сохранения)
  },
});

// Создаём persistor для работы с redux-persist
const persistor = persistStore(store);


export { store, persistor };
