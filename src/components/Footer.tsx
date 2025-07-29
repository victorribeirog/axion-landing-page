import axonLogo from "@/assets/axon-logo.png";
const Footer = () => {
  return <footer className="bg-muted/30 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3">
            <img src={axonLogo} alt="AXON" className="h-6 w-auto" />
            <span className="text-sm font-medium text-foreground">AXON</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">© 2025 AXON - Soluções em IA</p>
        </div>
      </div>
    </footer>;
};
export default Footer;