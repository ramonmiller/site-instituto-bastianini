import { Shield } from "lucide-react";

export default function Projects() {
  const projects = [
    { name: "S.E. Atlântico" },
    { name: "S.E. Atlântico" },
    { name: "S.E. Atlântico" }
  ];

  return (
    <section id="projetos" className="py-16 bg-white section-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-gray-800 mb-12">
          Projetos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <h3 className="font-montserrat font-semibold text-lg text-gray-800 mb-4">
                  {project.name}
                </h3>
                <div className="mb-4">
                  <Shield className="text-blue-800 h-16 w-16 mx-auto" />
                </div>
                <h4 className="font-montserrat font-semibold text-lg text-gray-800 mb-4">
                  {project.name}
                </h4>
                <div className="mb-4">
                  <Shield className="text-blue-800 h-16 w-16 mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
