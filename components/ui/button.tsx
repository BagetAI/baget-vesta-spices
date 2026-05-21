export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }) {
  const baseStyles = "px-8 py-4 rounded font-mono font-bold uppercase tracking-tighter transition-all flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-accent text-background hover:bg-white",
    secondary: "bg-muted text-foreground border border-muted hover:border-accent/40"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}