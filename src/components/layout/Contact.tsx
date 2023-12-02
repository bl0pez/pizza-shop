import { SectionHeaders } from "."
import { Phone } from "../icons"

const Contact = () => {
  return (
    <section className="mb-8">
        <SectionHeaders
            title="Contacto"
            subtitle="Contáctanos"
        />

        <div className="container mx-auto flex justify-between flex-wrap items-center gap-4">

        <div className="flex gap-2 text-4xl items-center">
            <Phone />
            <a className="text-2xl" href="tel:+569 9999 9999">+569 9999 9999</a>
        </div>
        <div className="flex gap-2 text-4xl items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
            </svg>
            <a className="text-2xl" href="https://goo.gl/maps/6m7sUu8b6kG2" target="_blank" rel="noopener noreferrer">
                Av. Siempre Viva 123, Springfield
            </a>
        </div>
        <div className="flex gap-2 text-4xl items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
            </svg>
            <a className="text-2xl" href="mailto:blopez4434@gmail.com">
                blopez4434@gmail.com
            </a>
        </div>

        </div>

    </section>
  )
}

export default Contact