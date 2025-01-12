function GetInvolved() {
    return (
        <section className="flex flex-col p-6 ">
            <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
            <form className="p-6 w-4/5">
                <label className="block mb-4">
                    <span className="text-gray-700">Name</span>
                    <input
                        type="text"
                        className="mt-1 p-2 block  w-full border border-gray-300 rounded shadow-sm focus:ring focus:ring-blue-200"
                        placeholder="Your Name"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Email</span>
                    <input
                        type="email"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded shadow-sm focus:ring focus:ring-blue-200"
                        placeholder="Your Email"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Select Cause</span>
                    <select className="mt-1 block w-fullv p-2 border border-gray-300 rounded shadow-sm focus:ring focus:ring-blue-200">
                        <option>Select an options</option>
                        <option>Education</option>
                        <option>Food</option>
                        <option>Healthcare</option>
                        <option>Skill</option>
                    </select>
                </label>
                <button
                    type="submit"
                    className=" bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </section>
    );
}
export default GetInvolved