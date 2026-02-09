import type { ReactNode } from 'react';

interface LayoutPageProps {
  header?: ReactNode;
  aside?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
}

export const LayoutPage = ({ header, aside, content, footer }: LayoutPageProps) => {
  return (
    <div className={`layout-container ${!aside ? 'no-aside' : ''}`}>
      {header && <section className="layout-header">{header}</section>}

      {aside && <aside className="layout-aside">{aside}</aside>}

      <main className="layout-content">{content}</main>

      {footer && <footer className="layout-footer">{footer}</footer>}
    </div>
  );
};