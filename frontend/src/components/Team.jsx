

const Team = () => {
    const teamMembers = [
        { name: "Robert Finn Kibachio", role: "Managing Director", description: "Visionary founder and CEO with 10+ years of experience in strategic business development." },
        { name: "Nicholas Kathiari", role: "Technical Director", description: "23 years of expertise in hardware, software, and business information technology." },
        { name: "Patrick Mwirigi", role: "Project Manager", description: "Over 15 years of experience in technical project management and client service." },
        { name: "Mercy", role: "General Manager", description: "Specialized in administration and risk management with 13 years of experience." },
      ];
    
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow rounded p-6 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 italic">{member.role}</p>
              <p className="text-gray-700 mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
