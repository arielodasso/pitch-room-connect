import { Slot } from '@radix-ui/react-slot';
import { X } from 'lucide-react';
import { type ButtonHTMLAttributes, type InputHTMLAttributes, type TextareaHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Button({
  className,
  variant = 'primary',
  size = 'default',
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'accent' | 'outline' | 'ghost'; size?: 'default' | 'sm' | 'lg' | 'icon'; asChild?: boolean }) {
  const C = asChild ? Slot : 'button';
  const sizeClasses = {
    default: 'min-h-11 px-6 text-xs',
    sm: 'min-h-9 px-4 text-[10px]',
    lg: 'min-h-12 px-8 text-sm',
    icon: 'size-10',
  };
  return (
    <C
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-[.14em] transition-all disabled:opacity-50',
        variant === 'primary' && 'border border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_10px_30px_-10px_rgba(4,101,188,0.8)]',
        variant === 'accent' && 'border border-accent bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-[0_10px_30px_-10px_rgba(255,127,4,0.7)]',
        variant === 'outline' && 'border border-border bg-transparent text-foreground hover:border-primary hover:text-primary',
        variant === 'ghost' && 'border border-transparent text-muted-foreground hover:text-foreground',
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

export function DemoBadge({ children = 'DEMO DATA', className }: { children?: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[.16em] text-accent ${className ?? ''}`}>
      {children}
    </span>
  );
}

export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background/90 p-4 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="max-h-[92vh] w-full max-w-2xl overflow-auto rounded-xl border border-border bg-surface shadow-2xl animate-fade-in">
        <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-xl border-b border-border bg-surface px-6 py-5">
          <h2 className="text-xl font-bold">{title}</h2>
          <Button variant="ghost" size="icon" className="size-10 p-0" onClick={onClose} aria-label="Cerrar">
            <X className="size-5" />
          </Button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

export function Field({
  label,
  area = false,
  className,
  ...props
}: { label: string; area?: boolean; className?: string } & (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>)) {
  const baseClasses = 'rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all';
  return (
    <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-muted-foreground">
      <span>{label}</span>
      {area ? (
        <textarea
          className={cn('min-h-28 p-4 resize-none normal-case', baseClasses, className)}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={cn('h-12 px-4 normal-case', baseClasses, className)}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </label>
  );
}