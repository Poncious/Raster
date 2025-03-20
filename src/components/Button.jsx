export default function Button({ children, onClick }) {
    return (
      <button
        className="w-full p-2 bg-blue-500 text-white rounded-lg"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }