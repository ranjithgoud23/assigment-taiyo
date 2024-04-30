import { Link } from "react-router-dom";
import { useAppSelector } from "app/hook";
import { selectContact } from "app/contacts/contactSlice";
import '../App.css'


const CreateContact = () => {
  const contacts = useAppSelector(selectContact);
  return (
    
    <div className="flex flex-col items-center p-4 text-center gap-10">
      <Link to="/contact-save">
        <button className="butt">Create Contact</button>
      </Link>
      {contacts.length === 0 && (
        <p className="hi">No Contact found.<br></br> Please add contact from <br></br>create contact button</p>
      )}
    </div>
  );
};

export default CreateContact;
