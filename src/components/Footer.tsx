const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">Aishu Mano</span>. Built with passion for data.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
