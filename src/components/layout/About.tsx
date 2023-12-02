import { SectionHeaders } from "."

const About = () => {
  return (
    <section className="container mx-auto text-center">
        <SectionHeaders
            title="Sobre nosotros"
            subtitle="Conoce nuestra historia"
        />
        <div className="max-w-md mx-auto text-gray-500 flex gap-4 flex-col">
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis culpa odio itaque vel, magnam aliquid rerum reiciendis aspernatur officiis suscipit, sunt ullam voluptate nulla temporibus maxime cupiditate tenetur aperiam! Eum!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid enim sequi ab perspiciatis nostrum architecto, minima eos, adipisci odio illum libero, beatae corporis ullam incidunt. Incidunt quod nostrum, quisquam dolorum dolores molestias. Quod sint.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quos itaque nihil quisquam minima non iste hic iusto sunt possimus!
            </p>
            </div>
    </section>
  )
}

export default About