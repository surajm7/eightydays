export default function SearchSection() {
  return (
    <div className="mb-8">
      <div className="bg-white rounded-2xl p-6 shadow-sm border">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Discover Amazing Places
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search destinations, lists, or users..."
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}