import type { DrawEntry } from '../types'

interface Props {
  entries: DrawEntry[]
  onReset: () => void
}

export function DrawResult({ entries, onReset }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-zinc-100">Resultado do Sorteio</h1>
        <p className="text-zinc-400 text-sm mt-1">{entries.length} participantes sorteados</p>
      </div>

      <div className="flex flex-col gap-2">
        {entries.map((entry, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-zinc-800 rounded-lg px-4 py-3"
          >
            <span className="text-zinc-500 text-xs w-5 text-right shrink-0">{i + 1}</span>
            <span className="text-zinc-100 font-medium flex-1">{entry.participant}</span>
            <span className="text-zinc-500 text-sm mx-1">→</span>
            <span className="text-green-400 font-semibold flex-1 text-right">{entry.team}</span>
          </div>
        ))}
      </div>

      <button
        className="w-full bg-zinc-700 hover:bg-zinc-600 text-zinc-100 py-3 rounded-lg font-medium transition-colors"
        onClick={onReset}
      >
        Novo Sorteio
      </button>
    </div>
  )
}
