import { useState } from "react";

function SearchSection() {
    const [destination, setDestination] = useState("");
    const [budget, setBudget] = useState("");
    const [date, setDate] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching trips to ${destination} on ${date} under ${budget} budget ✈️`);
    };

    return (
        <section className="py-[100px] flex justify-center">
            <div className="  bg-[#47476973] shadow-lg rounded-xl p-6">
                <h2 className="text-2xl font-bold text-center text-white mb-6">
                    Plan Your Perfect Trip
                </h2>
                <form
                    onSubmit={handleSearch}
                    className="grid md:grid-cols-3 gap-4 items-center"
                >
                    {/* Destination */}
                    <input
                        type="text"   placeholder="Enter Destination" value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    {/* Date */}
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    {/* Budget */}
                    <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option value="">Select Budget</option>
                        <option value="low"> Low (up to $500)</option>
                        <option value="medium">Medium ($500 - $2000)</option>
                        <option value="high">Luxury ($2000+)</option>
                    </select>
                    {/* Search Button */}
                    <button
                        type="submit"
                        className="md:col-span-3 bg-[#474769] text-white font-semibold py-2 rounded-lg hover:bg-[#474769a8] transition">
                        Search Trips
                    </button>
                </form>
            </div>
        </section>
    );
}

export default SearchSection;
