export function Button({ children, variant = "primary", ...props }) {
  const baseStyles = "px-4 py-2 mt-8 rounded-md font-bold transition-colors";
  const variants = {
    primary: "bg-green-600 text-black hover:bg-green-700",
    secondary: "bg-white-500 border text-black hover:bg-red-300",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}