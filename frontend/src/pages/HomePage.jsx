import Hero from "../components/Hero"
import Services from "../components/Services"
import Team from "../components/Team"

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen">
      <Hero />
      <Services />
      <Team />
      </div>
    </>
  )
}

export default HomePage
