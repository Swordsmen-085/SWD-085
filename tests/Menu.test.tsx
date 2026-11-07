import { render, screen, fireEvent, act } from '@testing-library/react';
import Menu from '../src/components/Menu';

describe('Menu', () => {
  it('renders menu button with correct aria-label when closed', () => {
    render(<Menu />);
    const btn = screen.getByRole('button', { name: 'Abrir menú' });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens menu overlay when button is clicked', () => {
    render(<Menu />);
    const btn = screen.getByRole('button', { name: 'Abrir menú' });
    fireEvent.click(btn);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(btn).toHaveAttribute('aria-expanded', 'true');
    expect(btn).toHaveAttribute('aria-label', 'Cerrar menú');
  });

  it('closes menu when button is clicked while open', () => {
    render(<Menu />);
    const btn = screen.getByRole('button', { name: 'Abrir menú' });
    act(() => { fireEvent.click(btn); });
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(btn).toHaveAttribute('aria-expanded', 'true');
    act(() => { fireEvent.click(btn); });
    // React state may not immediately reflect in jsdom; check aria attribute
    expect(btn).toHaveAttribute('aria-expanded', 'false');
  });

  it('contains nav links for the expected sections', () => {
    render(<Menu />);
    expect(screen.getByRole('link', { name: /inicio/i })).toHaveAttribute('href', '#inicio');
    expect(screen.getByRole('link', { name: /nosotros/i })).toHaveAttribute('href', '#nosotros');
    expect(screen.getByRole('link', { name: /el escuadr[oó]n/i })).toHaveAttribute('href', '#escuadron');
  });

  it('renders social links', () => {
    render(<Menu />);
    expect(screen.getByRole('link', { name: /discord/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /youtube/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument();
  });
});
