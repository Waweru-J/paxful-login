

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Dealogic Africa</h1>
      <ul className="flex space-x-4 text-white">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/eligibility">Eligibility</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
