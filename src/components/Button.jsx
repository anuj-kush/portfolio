function Button({
  children,
  href,
  variant = "primary",
}) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "border border-blue-500 hover:bg-blue-600";

  return (
    <a
      href={href}
      className={`${styles} px-6 py-3 rounded-xl font-medium transition duration-300`}
    >
      {children}
    </a>
  );
}

export default Button;