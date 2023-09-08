import { getAllContacts } from "../../api";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

export default async function Home() {
  const contacts = await getAllContacts();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* header */}
      <div className="flex md:max-w-5xl w-full items-center justify-between text-sm lg:flex bg-slate-700 text-white font-bold">
        <h1 className="text-2xl md:pl-5">ContactManager</h1>
        <AddContact />
      </div>
      {/* table content with contacts */}
      <div className="md:max-w-5xl w-full ">
        <ContactList contacts={contacts} />
      </div>
    </main>
  );
}
