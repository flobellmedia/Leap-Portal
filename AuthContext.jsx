import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../supabaseClient'

export default function OnboardingGate({ onRedeemed }) {
  const { signOut } = useAuth()
  const [code, setCode] = useState('')
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const { error: rpcError } = await supabase.rpc('redeem_invite', {
      p_code: code.trim(),
    })

    setSubmitting(false)

    if (rpcError) {
      setError('That code didn\u2019t match. Double-check it against the email Francesca sent you.')
      return
    }

    onRedeemed()
  }

  return (
    <div className="onboarding-shell">
      <div className="onboarding-panel">
        <div className="eyebrow">One Last Step</div>
        <h1 className="display onboarding-title">Activate Your Program</h1>
        <div className="hairline onboarding-rule" />
        <p>
          Enter the invite code from your welcome email to unlock your dashboard, milestones, and
          resources.
        </p>

        <form onSubmit={handleSubmit} className="onboarding-form">
          <label className="field-label" htmlFor="invite-code">
            Invite Code
          </label>
          <input
            id="invite-code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="LEAP-XXXXXX"
            required
          />

          {error && <div className="form-error">{error}</div>}

          <button type="submit" className="primary onboarding-submit" disabled={submitting}>
            {submitting ? 'Checking…' : 'Unlock My Portal'}
          </button>
        </form>

        <button type="button" className="onboarding-signout" onClick={signOut}>
          Sign out
        </button>
      </div>

      <style>{`
        .onboarding-shell {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--canvas);
          padding: 1.5rem;
        }
        .onboarding-panel {
          width: 100%;
          max-width: 420px;
          text-align: center;
        }
        .onboarding-title {
          font-size: 1.8rem;
          margin: 0.5rem 0 0;
        }
        .onboarding-rule {
          margin: 1.1rem auto 1.5rem;
        }
        .onboarding-form {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          text-align: left;
          margin-top: 1.5rem;
        }
        .field-label {
          font-family: var(--font-sans);
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .onboarding-submit {
          margin-top: 1.75rem;
          width: 100%;
        }
        .onboarding-signout {
          background: none;
          border: none;
          margin-top: 1.5rem;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
