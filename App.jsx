import { useState } from 'react'

export default function JournalPanel({ entries, onAdd }) {
  const [draft, setDraft] = useState('')
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    if (!draft.trim()) return
    setSaving(true)
    await onAdd(draft.trim())
    setDraft('')
    setSaving(false)
  }

  return (
    <div className="journal-panel">
      <textarea
        className="journal-input"
        placeholder="What's shifting for you today?"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        rows={4}
      />
      <button className="primary" onClick={handleSave} disabled={saving || !draft.trim()}>
        {saving ? 'Saving…' : 'Save Reflection'}
      </button>

      <div className="journal-entries">
        {entries.length === 0 && (
          <p className="empty-note">Your reflections will collect here over time.</p>
        )}
        {entries.map((e) => (
          <div key={e.id} className="journal-entry">
            <div className="journal-date">
              {new Date(e.created_at).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
            <p>{e.content}</p>
          </div>
        ))}
      </div>

      <style>{`
        .journal-input {
          width: 100%;
          font-family: var(--font-sans);
          border: 1px solid var(--crimson-line);
          border-radius: 0;
          padding: 0.9rem 1rem;
          background: var(--canvas);
          resize: vertical;
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }
        .journal-input:focus {
          outline: 1px solid var(--crimson);
          outline-offset: 0;
          border-color: var(--crimson);
        }
        .journal-entries {
          margin-top: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .journal-entry {
          border-left: 1px solid var(--crimson);
          padding-left: 1rem;
        }
        .journal-date {
          font-family: var(--font-sans);
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0.25rem;
        }
        .journal-entry p { margin: 0; }
        .empty-note { font-size: 0.85rem; }
      `}</style>
    </div>
  )
}
