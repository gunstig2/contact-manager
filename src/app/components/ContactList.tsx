import { IContact } from "../../../types/contact";
import ContactItem from "./ContactItem";

interface ContactListProps {
  contacts: IContact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-2 sm:px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase">
              Name
            </th>
            <th className="px-2 sm:px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase">
              Email
            </th>
            <th className="px-2 sm:px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase">
              Phone Number
            </th>

            <th className="px-2 sm:px-6 py-3 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contactItem={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
