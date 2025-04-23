
import { Hospital, Phone } from "lucide-react";

const rehabCenters = [
  {
    name: "Kerala State Mental Health Centre",
    location: "Thiruvananthapuram",
    phone: "0471-2522065",
  },
  {
    name: "Maya Rehabilitation Centre",
    location: "Ernakulam",
    phone: "0484-2366767",
  },
  {
    name: "Punarjani De-addiction Centre",
    location: "Kozhikode",
    phone: "0495-2741234",
  },
  {
    name: "Asha Bhavan",
    location: "Kollam",
    phone: "0474-2790595",
  },
];

const Footer = () => (
  <footer className="w-full bg-primary/90 text-white pt-8 pb-4 mt-12 shadow-inner">
    <div className="container mx-auto px-4">
      <h2 className="flex items-center gap-2 text-lg font-bold mb-4">
        <Hospital className="w-5 h-5 text-secondary" />
        Rehabilitation Centers in Kerala
      </h2>
      <ul className="grid md:grid-cols-2 gap-4 mb-6">
        {rehabCenters.map((center) => (
          <li key={center.name} className="bg-blue-800/50 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between shadow">
            <div>
              <div className="font-semibold">{center.name}</div>
              <div className="text-sm">{center.location}</div>
            </div>
            <a
              href={`tel:${center.phone}`}
              className="flex items-center mt-2 md:mt-0 text-yellow-200 hover:text-yellow-100 underline font-medium"
            >
              <Phone className="h-4 w-4 mr-1" />
              {center.phone}
            </a>
          </li>
        ))}
      </ul>
      <div className="text-center text-sm text-white/70 mt-4">
        &copy; {new Date().getFullYear()} Kerala Police – Drug Prevention Portal. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
