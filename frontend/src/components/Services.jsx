

const Services = () => {
    const services = [
        { title: "Lending Services", description: "Loans for businesses making $10M+ annually." },
        { title: "Commodity Trading", description: "Agricultural products, minerals, and more." },
        { title: "Global Partnerships", description: "Leverage international networks for growth." },
      ]; 
  return (
    <section className="py-10 bg-gray-50 min-h-screen">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow p-6 rounded">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-4 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Services
