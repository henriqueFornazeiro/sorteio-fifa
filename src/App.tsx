import { useState } from 'react'
import { ItemList } from './components/ItemList'
import { DrawResult } from './components/DrawResult'
import type { DrawEntry } from './types'

function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function App() {
  const [participants, setParticipants] = useState<string[]>([])
  const [teams, setTeams] = useState<string[]>([])
  const [result, setResult] = useState<DrawEntry[] | null>(null)
  const [error, setError] = useState('')

  function handleDraw() {
    if (participants.length === 0 || teams.length === 0) {
      setError('Adicione pelo menos um participante e um time.')
      return
    }
    if (participants.length !== teams.length) {
      setError(`Número de participantes (${participants.length}) e times (${teams.length}) deve ser igual.`)
      return
    }

    const shuffledTeams = shuffle(teams)
    const entries: DrawEntry[] = participants.map((p, i) => ({
      participant: p,
      team: shuffledTeams[i],
    }))

    setError('')
    setResult(entries)
  }

  function handleReset() {
    setParticipants([])
    setTeams([])
    setResult(null)
    setError('')
  }

  const canDraw = participants.length > 0 && teams.length > 0 && participants.length === teams.length

  const countDiff = participants.length - teams.length

  return (
    <div className="min-h-screen bg-zinc-900 flex items-start justify-center py-8 px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-zinc-100">Sorteio FIFA</h1>
          <p className="text-zinc-500 text-sm mt-1">Sorteio de times para campeonato</p>
        </div>

        {result ? (
          <DrawResult entries={result} onReset={handleReset} />
        ) : (
          <div className="flex flex-col gap-6">
            <ItemList
              title={`Participantes (${participants.length})`}
              placeholder="Nome do participante"
              items={participants}
              onChange={setParticipants}
            />

            <ItemList
              title={`Times (${teams.length})`}
              placeholder="Nome do time"
              items={teams}
              onChange={setTeams}
            />

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            {!error && countDiff !== 0 && participants.length > 0 && teams.length > 0 && (
              <p className="text-zinc-500 text-xs text-center">
                Faltam {Math.abs(countDiff)}{' '}
                {countDiff > 0 ? 'time(s)' : 'participante(s)'}
              </p>
            )}

            <button
              className="w-full bg-green-700 hover:bg-green-600 disabled:bg-zinc-700 disabled:text-zinc-500 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-colors"
              onClick={handleDraw}
              disabled={!canDraw}
            >
              Sortear
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
