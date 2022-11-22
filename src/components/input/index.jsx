export function Input({ label, placeholder, type, handle }) {
  return (
    <>
      <div>
        <label className="text-gray-200" htmlFor={type}>
          {label}
        </label>
        <input
          autoComplete="off"
          className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
          id={type}
          placeholder={placeholder}
          type={type}
          onChange={handle}
        />
      </div>
    </>
  )
}
