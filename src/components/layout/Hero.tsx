import Image from "next/image"
import { Right } from "../icons"

const Hero = () => {
  return (
    <section className="hero">
        <div className="flex-full">
            <h1 className="text-4xl font-semibold">Todo es mejor con una <span className="text-primary">pizza</span></h1>
            <p 
              className="my-2 text-gray-500 text-sm">
              La pizza es la pieza que falta para completar cada día, una alegría de vida sencilla pero deliciosa.</p>
            <div className="flex gap-4 text-sm">
                <button className="bg-primary flex items-center gap-2 px-4 py-2 rounded-full text-white uppercase">Ordenar ahora <Right /></button>
                <button className="flex gap-2 py-2 items-center text-gray-600 font-semibold">Ver menú <Right /></button>
            </div>
        </div>
        <div className="flex-full">
            <Image src='/pizza.png' alt='Pizza' width={300} height={300} />
        </div>
    </section>
  )
}

export default Hero