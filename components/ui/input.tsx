export function Input({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input 
      className={`bg-background border border-muted px-6 py-4 rounded font-mono text-sm focus:outline-none focus:border-accent transition-colors ${className}`}
      {...props}
    />
  );
}