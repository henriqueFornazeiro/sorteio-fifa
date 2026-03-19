import { useState, type KeyboardEvent } from 'react'

interface Props {
  title: string
  placeholder: string
  items: string[]
  onChange: (items: string[]) => void
}

export function ItemList({ title, placeholder, items, onChange }: Props) {
  const [input, setInput] = useState('')

  function add() {
    const value = input.trim()
    if (!value || items.includes(value)) return
    onChange([...items, value])
    setInput('')
  }

  function remove(index: number) {
    onChange(items.filter((_, i) => i !== index))
  }

  function handleKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') add()
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold text-zinc-200">{title}</h2>

      <div className="flex gap-2">
        <input
          className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500 text-sm"
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          onClick={add}
        >
          Adicionar
        </button>
      </div>

      {items.length > 0 && (
        <ul className="flex flex-col gap-1">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-center justify-between bg-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-200"
            >
              <span>{item}</span>
              <button
                className="text-zinc-500 hover:text-red-400 transition-colors ml-2 text-xs"
                onClick={() => remove(i)}
              >
                remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
