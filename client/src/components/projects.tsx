import { Shield } from "lucide-react";

export default function Projects() {
  const projects = [
    { name: "S.E. Atlântico", subtitle: "Juventude e Cultura" },
    { name: "S.E. Atlântico", subtitle: "Juventude e Cultura" },
    { name: "S.E. Atlântico", subtitle: "Juventude e Cultura" }
  ];

  return (
    <section id="projetos" className="py-20 bg-gray-50 section-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-blue-800 mb-16">
          Projetos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{project.subtitle}</p>
              
              <div className="mb-6">
                <Shield className="text-blue-800 h-20 w-20 mx-auto" />
              </div>
              
              <h4 className="font-montserrat font-semibold text-lg text-gray-800 mb-2">
                {project.name}
              </h4>
              <p className="text-sm text-gray-600 mb-6">{project.subtitle}</p>
              
              <div className="mb-4">
                <Shield className="text-blue-800 h-20 w-20 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
