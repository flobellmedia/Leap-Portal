export default function ResourceLibrary({ resources }) {
  if (!resources.length) {
    return <p className="empty-note">Your resources will appear here as they&rsquo;re added.</p>
  }

  return (
    <div className="resource-library">
      {resources.map((r) => (
        <a key={r.id} href={r.url} target="_blank" rel="noreferrer" className="resource-row">
          <div>
            <div className="resource-title">{r.title}</div>
            {r.description && <div className="resource-desc">{r.description}</div>}
          </div>
          <span className="resource-arrow">→</span>
        </a>
      ))}
      <style>{`
        .resource-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.9rem 0;
          border-bottom: 1px solid var(--crimson-line);
          text-decoration: none;
          color: inherit;
        }
        .resource-row:last-child { border-bottom: none; }
        .resource-title { font-weight: 400; font-size: 0.92rem; color: var(--ink); }
        .resource-desc { font-size: 0.82rem; color: var(--ink-soft); margin-top: 0.15rem; }
        .resource-arrow { color: var(--crimson); font-size: 1rem; flex-shrink: 0; }
        .empty-note { font-size: 0.85rem; }
      `}</style>
    </div>
  )
}
