import Image from 'next/image';

type MenuItemProps = {
    name: string;
    description: string;
    price: number;
    image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({name, description, price, image}) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md flex flex-col gap-2 justify-center items-center text-center hover:bg-white transition duration-500 ease-in-out hover:shadow-md hover:shadow-black/25">
                    <Image src={image} alt={name} width={150} height={150} />
                    <h4 className="font-semibold text-xl">{name}</h4>
                    <p className="text-gray-500 text-sm">{description}</p>
                    <button className="bg-primary text-white rounded-md px-4 py-2">{`Agregar $${price}`}</button>
    </div>
  )
}

export default MenuItem