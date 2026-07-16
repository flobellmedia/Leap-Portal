const PILLAR_LABELS = {
  relationships: 'Relationships',
  money: 'Money',
  identity: 'Identity',
}

export default function MilestoneList({ milestones, onToggle }) {
  const pillars = ['identity', 'relationships', 'money']

  return (
    <div className="milestone-list">
      {pillars.map((pillar) => {
        const items = milestones.filter((m) => m.pillar === pillar)
        if (items.length === 0) return null
        return (
          <div key={pillar} className="milestone-group">
            <div className="milestone-group-label">{PILLAR_LABELS[pillar]}</div>
            <ul>
              {items
                .sort((a, b) => a.week_number - b.week_number)
                .map((m) => (
                  <li key={m.id} className={m.completed ? 'done' : ''}>
                    <button
                      className="milestone-check"
                      onClick={() => onToggle(m)}
                      aria-pressed={m.completed}
                      aria-label={m.completed ? 'Mark as not complete' : 'Mark as complete'}
                    >
                      {m.completed ? '✓' : ''}
                    </button>
                    <div>
                      <div className="milestone-title">{m.title}</div>
                      {m.description && (
                        <div className="milestone-desc">{m.description}</div>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        )
      })}

      <style>{`
        .milestone-group { margin-bottom: 1.75rem; }
        .milestone-group:last-child { margin-bottom: 0; }
        .milestone-group-label {
          font-family: var(--font-sans);
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--crimson);
        }
        .milestone-group ul { list-style: none; margin: 0.7rem 0 0; padding: 0; }
        .milestone-group li {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 0.65rem 0;
          border-bottom: 1px solid var(--crimson-line);
        }
        .milestone-group li:last-child { border-bottom: none; }
        .milestone-check {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          border-radius: 0;
          border: 1px solid var(--crimson);
          background: transparent;
          color: var(--canvas);
          font-size: 0.75rem;
          line-height: 1;
          cursor: pointer;
          margin-top: 2px;
        }
        li.done .milestone-check {
          background: var(--crimson);
        }
        .milestone-title {
          font-weight: 400;
          font-size: 0.92rem;
          color: var(--ink);
        }
        li.done .milestone-title {
          text-decoration: line-through;
          color: var(--muted);
        }
        .milestone-desc {
          font-size: 0.82rem;
          color: var(--ink-soft);
          margin-top: 0.15rem;
        }
      `}</style>
    </div>
  )
}
