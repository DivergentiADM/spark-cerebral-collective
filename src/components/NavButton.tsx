interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavButton = ({ href, children, className = "" }: NavButtonProps) => {
  return (
    <a 
      href={href} 
      className={`text-foreground/80 hover:text-foreground transition-colors story-link ${className}`}
    >
      {children}
    </a>
  );
};

export default NavButton;