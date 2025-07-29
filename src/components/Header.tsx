import axonLogo from "@/assets/axon-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center">
          <img 
            src={axonLogo} 
            alt="AXON" 
            className="h-8 w-auto"
          />
          <span className="ml-2 text-lg font-semibold text-foreground">AXON</span>
        </div>
      </div>
    </header>
  );
};

export default Header;