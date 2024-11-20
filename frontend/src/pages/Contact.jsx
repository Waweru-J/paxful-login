

const Contact = () => {
  return (
    <section className="py-10 bg-gray-100 min-h-screen">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 text-center">Contact Us</h2>
      <div className="mt-8 text-center">
        <p className="text-lg">Address: Westpark Towers, Off-Muthithi Road, Nairobi, Kenya</p>
        <p className="text-lg">Email: <a href="mailto:info@dealogicafrica.com" className="text-blue-500">info@dealogicafrica.com</a></p>
        <p className="text-lg">Phone: +254 723 113 398</p>
      </div>
      <form className="mt-10 max-w-lg mx-auto bg-white shadow rounded p-6">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full border border-gray-300 rounded py-2 px-4" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded py-2 px-4" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full border border-gray-300 rounded py-2 px-4" rows="4"></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  </section>
  )
}

export default Contact
