export default function Card({ children, className }) {
  return (
    <div className={`p-8 bg-white shadow-md rounded-lg ${className} flex flex-col`}>
      {children}
    </div>
  );
}