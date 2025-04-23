
import { Shield, Phone } from "lucide-react";

const emergencyNumbers = [
  { name: "Police", number: "100" },
  { name: "Anti-Drug Helpline", number: "1800-1800-110" },
  { name: "Emergency", number: "112" },
];

const Navbar = () => (
  <nav className="w-full bg-primary text-primary-foreground shadow flex justify-between items-center px-4 py-2">
    <div className="flex items-center space-x-2">
      <Shield className="h-7 w-7 text-white" />
      <span className="text-lg font-bold tracking-wide">Kerala Police</span>
    </div>
    <div className="flex items-center space-x-6">
      {emergencyNumbers.map((item) => (
        <span
          key={item.name}
          className="flex items-center space-x-1 text-sm font-medium"
        >
          <Phone className="inline h-4 w-4 mr-1 text-white/90" />
          <span>
            {item.name}:{" "}
            <a
              href={`tel:${item.number}`}
              className="underline hover:text-accent font-semibold"
            >
              {item.number}
            </a>
          </span>
        </span>
      ))}
    </div>
  </nav>
);

export default Navbar;
