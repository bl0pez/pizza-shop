import Image from "next/image"
import { MenuItem } from "../menu"
import { SectionHeaders } from "."

const HomeMenu = () => {
  return (
    <>
        <section>
            <div className="container mx-auto">
                <SectionHeaders
                    title="Menú"
                    subtitle="Top mejores pizzas"
                />
            <div className="grid grid-cols-3 gap-4 z-20">
                <MenuItem name="Pizza de Queso" description="Pizza de queso mozzarella" price={100} image="/pizza.png" />
                <MenuItem name="Pizza de Pepperoni" description="Pizza de pepperoni" price={120} image="/pizza.png" />
                <MenuItem name="Pizza de Jamón" description="Pizza de jamón" price={120} image="/pizza.png" />
                <MenuItem name="Pizza de Piña" description="Pizza de piña" price={120} image="/pizza.png" />
                <MenuItem name="Pizza de Champiñones" description="Pizza de champiñones" price={120} image="/pizza.png" />
                <MenuItem name="Pizza de Salami" description="Pizza de salami" price={120} image="/pizza.png" />
            </div>
            </div>
        </section>
    </>
  )
}

// scale-x-[-1] rotate-180 h-54 w-32
export default HomeMenu