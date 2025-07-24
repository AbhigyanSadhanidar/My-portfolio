

const About = () => {
  return (
    <section id="about" className="py-20  bg-[#fff7ed] ">
      <div className="max-w-6xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1  mx-auto"></div>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            Hello! I'm Abhigyan Sadhanidar, currently pursuing my Bachelor's
            degree in Computer Science Engineering from The Assam Kaziranga
            University, Assam, India.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Currently working as an AWS Cloud Intern at F13 Technologies, where
            I’ve not only deepened my theoretical understanding of AWS services
            but also had the chance to apply that knowledge to real-world
            projects. During my internship, I’ve been actively involved in
            building cloud-based solutions like a real-time attendance system, a
            resume builder with integrated AWS services, and a cloud-based
            inventory management system tailored for local businesses. These
            experiences have helped me gain practical skills in cloud
            infrastructure, DevOps workflows, and building scalable applications
            on AWS. I'm also an active member of the IEEE Student Branch, where
            I engage with tech communities and stay updated with emerging
            technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
