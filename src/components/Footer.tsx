import axonPreto from "@/assets/axon-preto.png";
const Footer = () => {
  return <footer className="bg-muted/30 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3">
            <img src={axonPreto} alt="AXON" className="h-28 w-auto" />
          </div>
          <p className="text-sm text-black text-center">© 2025 AXON - Soluções em IA</p>
        </div>
      </div>
    </footer>;
};
export default Footer;