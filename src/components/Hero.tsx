
import { ArrowDown, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center  bg-[#fff7ed]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Abhigyan Sadhanidar
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Aspiring Cloud Engineer with a strong foundation in computer science
            and hands-on experience in cloud technologies. Seeking to leverage
            skills in cloud platforms, programming, and infrastructure
            management to contribute to innovative projects and enhance cloud
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>

            <div className="flex space-x-6">
              <a
                href="https://github.com/AbhigyanSadhanidar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200"
              >
                <Github size={24} className="text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhigyan-sadhanidar-98a212251/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 rounded-full hover:bg-white/50 transition-colors duration-200"
          >
            <ArrowDown size={32} className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
