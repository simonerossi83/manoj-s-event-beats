import { Youtube, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg font-bold text-foreground">DJ Amery</p>
          <p className="text-muted-foreground text-sm font-light mt-1">
            DJ professionista per matrimoni, eventi di piazza e feste private in Lombardia e Nord Italia.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.youtube.com/@DJ_Amery"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
        </div>

        <p className="text-muted-foreground/50 text-xs font-light">
          © 2026 DJ Amery. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
