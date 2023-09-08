"use client";

import { FormEventHandler, useState } from "react";
import Modal from "./Modal";
import { addContact } from "../../../api";
import { useRouter } from "next/navigation";
import { IFormData } from "../../../types/contact";

const AddContact: React.FC = () => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleFormDataChange = async (newFormData: IFormData) => {
    setFormData(newFormData);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await addContact({
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    });
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
    });
    router.refresh();
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="bg-green-400 p-5">
        Add
      </button>
      <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <form onSubmit={handleSubmit} className="p-5">
          <h2 className="text-xl">Add new contact</h2>
          <div className="mt-2 flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700">Name</span>
            <input
              value={formData.name}
              onChange={(e) =>
                handleFormDataChange({ ...formData, name: e.target.value })
              }
              type="text"
              placeholder="Type here"
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-700 rounded-md py-2 pl-1 shadow-sm focus:outline-none sm:text-sm"
            />

            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              value={formData.email}
              onChange={(e) =>
                handleFormDataChange({ ...formData, email: e.target.value })
              }
              type="text"
              placeholder="Type here"
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-700 rounded-md py-2 pl-1 shadow-sm focus:outline-none sm:text-sm"
            />

            <span className="text-sm font-medium text-slate-700">
              Phone number
            </span>
            <input
              value={formData.phoneNumber}
              onChange={(e) =>
                handleFormDataChange({
                  ...formData,
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
    </div>
  );
};

export default AddContact;
