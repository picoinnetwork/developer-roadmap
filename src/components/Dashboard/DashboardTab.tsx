import type { ReactNode } from 'react';
import { cn } from '../../lib/classname';

type DashboardTabProps = {
  label: string | ReactNode;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
  href?: string;
  avatar?: string;
  icon?: ReactNode;
};

export function DashboardTab(props: DashboardTabProps) {
  const { isActive, onClick, label, className, href, avatar, icon } = props;

  const Slot = href ? 'a' : 'button';

  return (
    <Slot
      onClick={onClick}
      className={cn(
        'flex h-[30px] shrink-0 items-center gap-1 rounded-md border bg-white p-1.5 px-2 text-sm leading-none text-gray-600',
        isActive ? 'border-gray-500 bg-gray-200 text-gray-900' : '',
        className,
      )}
      {...(href ? { href } : {})}
    >
      {avatar && (
        <img
          src={avatar}
          alt="avatar"
          className="h-4 w-4 mr-0.5 rounded-full object-cover"
        />
      )}
      {icon}
      {label}
    </Slot>
  );
}
