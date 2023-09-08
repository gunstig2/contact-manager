import { IContact } from "./types/contact";

const baseUrl = "http://localhost:3002";

export const getAllContacts = async (): Promise<IContact[]> => {
  const res = await fetch(`${baseUrl}/contacts`, { cache: "no-store" });
  const contacts = await res.json();
  return contacts;
};

export const addContact = async (contact: IContact): Promise<IContact> => {
  const res = await fetch(`${baseUrl}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  const newContact = await res.json();
  return newContact;
};

export const editContact = async (contact: IContact): Promise<IContact> => {
  const res = await fetch(`${baseUrl}/contacts/${contact.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  const updatedContact = await res.json();
  return updatedContact;
};

export const deleteContact = async (id: number): Promise<void> => {
  await fetch(`${baseUrl}/contacts/${id}`, {
    method: "DELETE",
  });
};
