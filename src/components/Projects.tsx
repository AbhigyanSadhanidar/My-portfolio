
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Attendance System using AWS Rekognition",
      description:
        "This project showcases a real-time, serverless facial recognition attendance system using AWS. A simple frontend captures webcam images and uploads them to S3 via a pre-signed URL. An S3 trigger invokes a Lambda function, which uses Rekognition to match faces and logs attendance in DynamoDB with timestamps. CloudWatch handles logging. The fully serverless architecture ensures scalability and low maintenance perfect for smart classrooms or office check-ins.",
      image: "architecture-diagram.png",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "API-Gateway",
        "DynamoDB",
        "Rekognition",
        "Lambda",
        "S3",
        "CloudWatch",
      ],
      githubUrl:
        "https://github.com/AbhigyanSadhanidar/Real-time-attendance-system-using-AWS.git",
    },
    {
      title: "Cloud based Resume Builder",
      description:
        "This project aims to build a cloud-based resume generator that enables users to register/login, enter personal and professional details, preview their resume in multiple formats, and download it as a PDF. The tool is designed with a strong focus on user experience, cloud service integration, and serverless automation using AWS. The system is fully scalable, secure, and cost-efficient, leveraging the power of AWS services like Lambda, S3, and API Gateway.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      technologies: [
        "Reactjs",
        "CloudFront",
        "API-Gateway",
        "DynamoDB",
        "Lambda",
        "S3",
        "CloudWatch",
      ],
      githubUrl:
        "https://github.com/AbhigyanSadhanidar/Cloud-base-resume-builder.git",
    },
    {
      title: "Spotify playlist generator using Terraform",
      description:
        "Automated the process of creating and managing Spotify playlists using Terraform. Integrated the Spotify API to enable seamless playlist updates, modifications, and infrastructure provisioning.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      technologies: ["Terraform", "Spotify API"],
      githubUrl:
        "https://github.com/AbhigyanSadhanidar/SPOTIFYwithTERRAFORM.git",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#fff7ed] ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1  mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className=" rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1  text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
