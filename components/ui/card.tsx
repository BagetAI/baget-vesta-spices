export function Card({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-muted border border-muted hover:border-accent/40 transition-all rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
}