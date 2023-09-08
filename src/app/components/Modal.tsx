interface ModalProps {
  isOpen: boolean;
  setIsModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsModalOpen, children }) => {
  const modalClassName = isOpen ? "block" : "hidden";
  return (
    <div className={`fixed text-black inset-0 z-50 ${modalClassName}`}>
      <div className="fixed inset-0 bg-black opacity-70"></div>
      <div className="flex items-center justify-center h-screen">
        <div className="relative w-auto max-w-md p-6 bg-white rounded-lg">
          <button
            className="absolute bg-red-400 p-1 top-0 right-0 m-4 text-black hover:bg-red-500"
            onClick={() => setIsModalOpen(false)}
          >
            x
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
