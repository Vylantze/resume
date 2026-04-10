import { type PropsWithChildren } from 'react';

export function LinkComponent ({ href, children }: PropsWithChildren<{ href: string }>) {
  return (
    <a target="_blank" href={href}>{children}</a>
  );
}