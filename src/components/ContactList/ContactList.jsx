import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice"; // Экшн для удаления контакта
import { selectNameFilter } from "../../redux/filtersSlice"; // Селектор для фильтра
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectContacts); // Получаем все контакты из Redux
  const filter = useSelector(selectNameFilter); // Получаем фильтр из Redux

  // Фильтруем контакты по имени
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

return (
  <ul className={css.contactList}>
    {filteredContacts.length === 0
      ? null
      : filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
  </ul>
);
};

export default ContactList;
