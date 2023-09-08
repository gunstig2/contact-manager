"use client";

import { FormEventHandler, useState } from "react";
import { IContact, IFormData } from "../../../types/contact";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteContact, editContact } from "../../../api";

interface ContactProps {
  contactItem: IContact;
}

const ContactItem: React.FC<ContactProps> = ({ contactItem }) => {
  const router = useRouter();

  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [contactToEdit, setContactToEdit] = useState<IFormData>({
    // id: contactItem.id,
    name: contactItem.name,
    email: contactItem.email,
    phoneNumber: contactItem.phoneNumber,
  });

  const handleFormDataChange = async (newFormData: IFormData) => {
    setContactToEdit(newFormData);
  };

  const handleSubmitEdit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await editContact({
      id: contactItem.id,
      name: contactToEdit.name,
      email: contactToEdit.email,
      phoneNumber: contactToEdit.phoneNumber,
    });
    setOpenEditModal(false);
    // setContactToEdit({
    //     name: '',
    //     email: '',
    //     phoneNumber: '',
    //   });
    router.refresh();
  };

  const handleDeleteContact = async (id: number) => {
    await deleteContact(id);
    setOpenDeleteModal(false);
    router.refresh();
  };

  return (
    <tr key={contactItem.id}>
      <td className="px-6 py-4 whitespace-no-wrap">{contactItem.name}</td>
      <td className="px-6 py-4 whitespace-no-wrap">{contactItem.email}</td>
      <td className="px-6 py-4 whitespace-no-wrap">
        {contactItem.phoneNumber}
      </td>
      <td className="py-4 flex gap-2 px-4 justify-end">
        <button
          onClick={() => setOpenEditModal(true)}
          className="bg-yellow-400 p-2 text-black"
        >
          Edit
        </button>

        <Modal isOpen={openEditModal} setIsModalOpen={setOpenEditModal}>
          <form onSubmit={handleSubmitEdit} className="p-5">
            <h2 className="text-xl">Add new contact</h2>
            <div className="modal-action mt-2 flex flex-col gap-2">
              <span className="text-lg font-bold text-slate-700">Name</span>
              <input
                value={contactToEdit.name}
                onChange={(e) =>
                  handleFormDataChange({
                    ...contactToEdit,
                    name: e.target.value,
                  })
                }
                type="text"
                placeholder="Type here"
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-700 rounded-md py-2 pl-1 shadow-sm focus:outline-none sm:text-sm"
              />

              <span className="text-sm font-medium text-slate-700">Email</span>
              <input
                value={contactToEdit.email}
                onChange={(e) =>
                  handleFormDataChange({
                    ...contactToEdit,
                    email: e.target.value,
                  })
                }
                type="text"
                placeholder="Type here"
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-700 rounded-md py-2 pl-1 shadow-sm focus:outline-none sm:text-sm"
              />

              <span className="text-sm font-medium text-slate-700">
                Phone number
              </span>
              <input
                value={contactToEdit.phoneNumber}
                onChange={(e) =>
                  handleFormDataChange({
                    ...contactToEdit,
                    phoneNumber: e.target.value,
                  })
                }
                type="text"
                placeholder="Type here"
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-700 rounded-md py-2 pl-1 shadow-sm focus:outline-none sm:text-sm"
              />
              <button
                type="submit"
                className="bg-slate-700 w-full py-2 mt-2 text-white "
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>

        <button
          onClick={() => setOpenDeleteModal(true)}
          className="bg-red-400 p-2 text-black"
        >
          Delete
        </button>

        <Modal isOpen={openDeleteModal} setIsModalOpen={setOpenDeleteModal}>
          <h2 className="text-xl">
            Are you sure you want to delete this contact?
          </h2>
          <div className="modal-action mt-2 flex flex-col gap-2">
            <button
              onClick={() => handleDeleteContact(contactItem.id)}
              type="submit"
              className="bg-red-500 w-full py-2 mt-2 text-white "
            >
              Delete
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default ContactItem;
