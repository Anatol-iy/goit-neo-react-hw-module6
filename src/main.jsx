import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Для подключения Redux
import { PersistGate } from "redux-persist/integration/react"; // Для работы с persist
import { store, persistor } from "./redux/store"; // Ваши store и persistor
import App from "./App"; // Главный компонент вашего приложения

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
