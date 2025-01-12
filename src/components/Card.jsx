

function Card({ image, title, description }) {
    return (
        <div className="bg-black flex shadow-md rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
                <button className="text-blue-500 hover:underline">Learn More</button>
            </div>
        </div>
    );
}

function CardsSection() {
    const causes = [
        { id: 1, image: "/assets/education.jpg", title: "Education for All", description: "Support access to quality education." },
        { id: 2, image: "cause2.jpg", title: "Clean Water", description: "Ensure safe drinking water for everyone." },
        { id: 3, image: "cause3.jpg", title: "Climate Action", description: "Combat climate change together." },
        { id: 4, image: "cause4.jpg", title: "Healthcare", description: "Provide essential healthcare services." },
    ];

    return (
        <section className="p-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-justify mb-6">Popular Causes</h2>
            <div className="flex flex-col gap-4">
                {causes.map((cause) => (
                    <Card key={cause.id} {...cause} />
                ))}
            </div>
        </section>
    );
}
export default CardsSection