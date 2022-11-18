export function Input({ label, placeholder }) {
  return (
    <>
      <div>
        <label className="text-gray-200" htmlFor="email">
          {label}
        </label>
        <input
          autoComplete="off"
          className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
          id="email"
          placeholder={placeholder}
          type="email"
        />
      </div>
    </>
  )
}
