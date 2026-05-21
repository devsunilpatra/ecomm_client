import clsx from "clsx";

export const Button = ({
  children,
  variant = "outline",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-8 py-2 text-sm transition-all duration-500 cursor-pointer border";

  const variants = {
    outline: "border-black text-black hover:bg-black hover:text-white",

    solid: "bg-black text-white border-black hover:bg-white hover:text-black",

    ghost: "border-transparent text-black hover:bg-gray-100",

    inverted:
      "bg-white text-black border-black hover:bg-black hover:text-white",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
