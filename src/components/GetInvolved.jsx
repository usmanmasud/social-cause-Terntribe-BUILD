function GetInvolved() {
    return (
        <section className="flex flex-col items-center p-6 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
            <form className="bg-white shadow-md rounded p-6 w-full max-w-md">
                <label className="block mb-4">
                    <span className="text-gray-700">Name</span>
                    <input
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded shadow-sm focus:ring focus:ring-blue-200"
                        placeholder="Your Name"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Email</span>
                    <input
                        type="email"
                        className="mt-1 block w-full border-gray-300 rounded shadow-sm focus:ring focus:ring-blue-200"
                        placeholder="Your Email"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Select Cause</span>
                    <select className="mt-1 block w-full border-gray-300 rounded shadow-sm focus:ring focus:ring-blue-200">
                        <option>Education</option>
                        <option>Clean Water</option>
                        <option>Climate Action</option>
                        <option>Healthcare</option>
                    </select>
                </label>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}
export default GetInvolved