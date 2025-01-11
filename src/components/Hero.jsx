function Hero() {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
            <h1 className="text-4xl font-bold mb-4">Join the Cause</h1>
            <p className="text-lg text-gray-600 mb-6">
                Together, we can make a difference in the world.
            </p>
            <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
                Join the Cause
            </button>
        </section>
    );
}

export default Hero