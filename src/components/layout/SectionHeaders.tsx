type SectionHeadersProps = {
    subtitle: string;
    title: string;
}

const SectionHeaders: React.FC<SectionHeadersProps> = ({ subtitle, title }) => {
  return (
        <div className="my-8 text-center">
            <h2 
                className="text-primary font-bold text-4xl italic"
            >
                {title}
            </h2>
            <h3 
                className='uppercase text-gray-500 font-semibold leading-3 text-sm'
            >
                { subtitle }
            </h3>
        </div>
  )
}

export default SectionHeaders