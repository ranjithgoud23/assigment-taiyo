import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hook";
import {
  deleteContact,
  editContact,
  selectContact,
  toggleActive,
} from "app/contacts/contactSlice";

const buttonStyle = "hover:bg-white outline m-2 p-1";

const ContactList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContact);

  const [editingContactId, setEditingContactId] = useState<string | null>(null);
  const [editedFname, setEditedFname] = useState("");
  const [editedLname, setEditedLname] = useState("");
  const [editedStatus, setEditedStatus] = useState(true); // True for active, false for inactive

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  

  const handleEdit = (id: string) => {
    const contact = contacts.find((contact) => contact.id === id);
    if (contact) {
      setEditingContactId(id);
      setEditedFname(contact.fName);
      setEditedLname(contact.lName);
      setEditedStatus(contact.isActive);
    }
  };

  const handleSaveEdit = () => {
    if (editingContactId) {
      dispatch(
        editContact({
          id: editingContactId,
          fName: editedFname,
          lName: editedLname,
          isActive: editedStatus,
        })
      );
      setEditingContactId(null);
      setEditedFname("");
      setEditedLname("");
      setEditedStatus(true); // Reset status to true (active) after saving edit
    }
  };

  return (
    
    <div className="flex flex-wrap mx-8 gap-2 justify-center ">
      
      {contacts.map((contact) => (
        <div className="" key={contact.id}>
          {editingContactId === contact.id ? (
            <div className="flex flex-col gap-4 p-7 ">
              <label htmlFor="fName">
                First Name:
                <input
                  id="fName"
                  type="text"
                  className="px-2 ml-2"
                  placeholder="Enter your first name"
                  value={editedFname}
                  onChange={(e) => setEditedFname(e.target.value)}
                />
              </label>

              <label htmlFor="lName">
                Last Name:
                <input
                  id="lName"
                  type="text"
                  className="px-2 ml-2"
                  value={editedLname}
                  placeholder="Enter your last name"
                  onChange={(e) => setEditedLname(e.target.value)}
                />
              </label>

              <div className="flex flex-column-gap-4 ml-2">
                <label>Status:</label>
                <label htmlFor="active">
                  
                  <input
                    id="active"
                    type="radio"
                    name="status"
                    value="active"
                    checked={editedStatus}
                    onChange={() => setEditedStatus(true)}
                  />
                  Active
                </label>
                <label htmlFor="inactive">
                  
                  <input
                    id="inactive"
                    type="radio"
                    name="status"
                    value="inactive"
                    checked={!editedStatus}
                    onChange={() => setEditedStatus(false)}
                  />
                  Inactive
                </label>
              </div>

              <button
                className="butt"
                onClick={handleSaveEdit}
              >
                Save Editted Contact
              </button>
            </div>
          ) : (
            <div className="hello">
              <div className="editBody">
                <h4 className="text-lg font-semibold capitalize">{`${contact.fName} ${contact.lName}`}</h4>
                <p className="uppercase">
                  {contact.isActive ? "Active" : "Inactive"}
                </p>
              </div>
                <div className="edi">
                  <button
                    className="edbut"
                    onClick={() => handleEdit(contact.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delbut"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </button>
                  
                </div>
              </div>
          )}
        </div>
      ))}
    </div>

  );
};

export default ContactList;
