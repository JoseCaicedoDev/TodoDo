export function Button({ name }) {
  return (
    <>
      <div className="mt-4 order-1 md:order-2">
        <button
          className="w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors"
          type="submit"
        >
          {name}
        </button>
      </div>
    </>
  )
}
