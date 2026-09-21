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
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'ghost'; size?: 'default' | 'sm' | 'lg' | 'icon'; asChild?: boolean }) {
  const C = asChild ? Slot : 'button';
  const sizeClasses = {
    default: 'min-h-11 px-5 text-xs',
    sm: 'min-h-9 px-4 text-[10px]',
    lg: 'min-h-12 px-6 text-sm',
    icon: 'size-10',
  };
  return (
    <C
      className={cn(
        'inline-flex items-center justify-center gap-2 border font-bold uppercase tracking-[.12em] transition-all disabled:opacity-50',
        variant === 'primary' && 'border-accent bg-accent text-accent-foreground hover:bg-accent/85',
        variant === 'outline' && 'border-border bg-transparent text-foreground hover:border-accent hover:text-accent',
        variant === 'ghost' && 'border-transparent text-muted-foreground hover:text-foreground',
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

export function DemoBadge({ children = 'DEMO DATA' }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-accent/30 bg-accent/5 px-2 py-1 text-[9px] font-bold uppercase tracking-[.16em] text-accent">
      {children}
    </span>
  );
}

export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background/90 p-4 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="max-h-[92vh] w-full max-w-2xl overflow-auto border border-border bg-surface shadow-2xl animate-fade-in">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface px-6 py-5">
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
  const baseClasses = 'border border-border bg-background text-sm text-foreground outline-none focus:border-accent transition-colors';
  return (
    <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[.12em] text-muted-foreground">
      <span>{label}</span>
      {area ? (
        <textarea
          className={cn('min-h-28 p-3 resize-none normal-case', baseClasses, className)}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={cn('h-12 px-3 normal-case', baseClasses, className)}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </label>
  );
}