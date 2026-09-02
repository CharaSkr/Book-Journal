function LandingPage() {
  return (
    <main className="min-h-[calc(100vh-73px)] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-6">
        Your personal reading journal
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Keep track of the books you read, discover your reading habits,
        and build your personal library in one place.
      </p>

      <button className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800">
        Get Started
      </button>
    </main>
  )
}

export default LandingPage