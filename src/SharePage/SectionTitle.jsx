


const SectionTitle = ({ subHeader, mainDeader }) => {
    return (
        <div className="md:w-4/12 text-center mx-auto my-8">
            <p className="text-yellow-400 mb-2">---{subHeader}---</p>
            <h3 className="text-4xl font-semibold border-y-2 py-4">{mainDeader}</h3>
        </div>
    )
}

export default SectionTitle