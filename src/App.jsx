import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import ContactForm from "./components/ContactForm/ContactForm"; 
import SearchBox from "./components/SearchBox/SearchBox"; 
import ContactList from "./components/ContactList/ContactList";

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </PersistGate>
  );
};

export default App;
