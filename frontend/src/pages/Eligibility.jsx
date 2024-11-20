

const Eligibility = () => {
  return (
    <section className="py-10 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 text-center">Check Your Eligibility</h2>
        <p className="text-center text-gray-700 mt-4">
          Is your business generating $10M or more annually? See if you qualify for our premium lending services.
        </p>
        <form className="mt-10 max-w-lg mx-auto bg-white shadow rounded p-6">
          <div className="mb-4">
            <label className="block text-gray-700">Business Name</label>
            <input type="text" className="w-full border border-gray-300 rounded py-2 px-4" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Annual Revenue (USD)</label>
            <input type="number" className="w-full border border-gray-300 rounded py-2 px-4" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Industry</label>
            <select className="w-full border border-gray-300 rounded py-2 px-4">
              <option>Manufacturing</option>
              <option>Agriculture</option>
              <option>Energy</option>
              <option>Other</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Eligibility
