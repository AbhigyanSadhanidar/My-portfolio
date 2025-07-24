import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Abhigyan Sadhanidar</h3>
            <p className="text-gray-400">Aspiring Cloud Engineer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">© 2025 Abhigyan Sadhanidar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
