import React, { useState, useEffect } from 'react';

export interface MenuLink {
  label: string;
  href: string;
}

interface MenuProps {
  links?: MenuLink[];
  socials?: MenuLink[];
}

const DEFAULT_LINKS: MenuLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'El Escuadrón', href: '#escuadron' },
  { label: 'Operaciones', href: '#operaciones' },
  { label: 'Únete', href: '#unete' },
];

const DEFAULT_SOCIALS: MenuLink[] = [
  { label: 'DISCORD', href: '#' },
  { label: 'YOUTUBE', href: '#' },
  { label: 'INSTAGRAM', href: '#' },
];

const Menu: React.FC<MenuProps> = ({
  links = DEFAULT_LINKS,
  socials = DEFAULT_SOCIALS,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      <header className="swd-header" role="banner">
        <div className="swd-header__logo-placeholder" aria-hidden="true">
          SWD-085
        </div>
        <button
          type="button"
          className={`swd-menu-btn${open ? ' swd-menu-btn--active' : ''}`}
          onClick={toggle}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span>Menú</span>
          <span className="swd-menu-btn__icon" aria-hidden="true">
            <span className="swd-menu-btn__line" />
            <span className="swd-menu-btn__line" />
            <span className="swd-menu-btn__line" />
          </span>
        </button>
      </header>

      <nav
        className={`swd-overlay${open ? ' swd-overlay--active' : ''}`}
        id="swd-overlay"
        aria-label="Menú principal"
        role="navigation"
      >
        <ul className="swd-overlay__nav">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="swd-overlay__link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="swd-overlay__socials">
          {socials.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="swd-overlay__social-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Menu;