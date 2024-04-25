import { useEffect } from "react";

function ImageModal({ isOpen, onClose, image }) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("#modal-content")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-900 bg-opacity-50">
      <div
        id="modal-content"
        className="relative w-full max-w-lg rounded-lg bg-white p-6"
      >
        <button
          className="absolute right-0 top-0 m-4 text-red-500 hover:text-red-700"
          onClick={onClose}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <img src={image} alt="Product" className="w-full" />
      </div>
    </div>
  );
}

export default ImageModal;
