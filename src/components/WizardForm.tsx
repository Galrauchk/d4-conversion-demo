import { useState } from 'react';

const NUISIBLES = [
  { id: 'rats', label: 'Rats / Souris', icon: '🐀', slug: 'deratisation' },
  { id: 'cafards', label: 'Cafards', icon: '🪳', slug: 'cafards' },
  { id: 'punaises', label: 'Punaises de lit', icon: '🛏️', slug: 'punaises-de-lit' },
  { id: 'guepes', label: 'Guêpes / Frelons', icon: '🐝', slug: 'guepes-frelons' },
  { id: 'termites', label: 'Termites', icon: '🪵', slug: 'termites' },
  { id: 'autres', label: 'Autre nuisible', icon: '🦟', slug: 'desinfection' },
];

type Step = 1 | 2 | 3 | 'success';

interface FormData {
  nuisible: string;
  ville: string;
  codePostal: string;
  urgence: string;
  nom: string;
  tel: string;
  email: string;
}

export default function WizardForm() {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState<FormData>({
    nuisible: '', ville: '', codePostal: '', urgence: '',
    nom: '', tel: '', email: ''
  });
  const [loading, setLoading] = useState(false);

  const progress = step === 1 ? 33 : step === 2 ? 66 : step === 3 ? 100 : 100;

  const updateData = (key: keyof FormData, value: string) =>
    setData(prev => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setStep('success');
  };

  if (step === 'success') {
    return (
      <div className="wizard-step text-center py-6">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-[#0a0f1e] mb-2">Demande envoyée !</h3>
        <p className="text-gray-600 text-sm mb-4">
          Un technicien vous rappelle <strong>dans les 15 minutes</strong>.
        </p>
        <div className="bg-[#10b981]/10 rounded-xl p-4 text-left">
          <p className="text-[#10b981] font-bold text-sm">✓ Nuisible : {NUISIBLES.find(n => n.id === data.nuisible)?.label}</p>
          <p className="text-[#10b981] font-bold text-sm">✓ Ville : {data.ville}</p>
          <p className="text-gray-600 text-xs mt-2">Ou appelez directement : <a href="tel:+33800000000" className="font-bold text-[#0066ff]">0 800 000 000</a></p>
        </div>
      </div>
    );
  }

  return (
    <div className="wizard-step">
      {/* Progress bar */}
      <div className="mb-5">
        <div className="flex justify-between text-xs text-gray-500 mb-1.5">
          <span className={step === 1 ? 'font-bold text-[#0066ff]' : ''}>1. Nuisible</span>
          <span className={step === 2 ? 'font-bold text-[#0066ff]' : ''}>2. Localisation</span>
          <span className={step === 3 ? 'font-bold text-[#0066ff]' : ''}>3. Contact</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="progress-bar-inner h-full rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="wizard-step">
          <p className="text-[#0a0f1e] font-semibold text-sm mb-3">Quel nuisible avez-vous ?</p>
          <div className="grid grid-cols-2 gap-2">
            {NUISIBLES.map(n => (
              <button
                key={n.id}
                type="button"
                onClick={() => { updateData('nuisible', n.id); setStep(2); }}
                className={`flex items-center gap-2 p-3 rounded-xl border-2 text-left text-sm font-semibold transition-all hover:border-[#0066ff] ${
                  data.nuisible === n.id
                    ? 'border-[#0066ff] bg-[#0066ff]/5 text-[#0066ff]'
                    : 'border-gray-200 text-[#0a0f1e]'
                }`}
              >
                <span className="text-xl">{n.icon}</span>
                <span className="leading-tight">{n.label}</span>
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">Sélectionnez pour continuer →</p>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <form className="wizard-step" onSubmit={e => { e.preventDefault(); setStep(3); }}>
          <p className="text-[#0a0f1e] font-semibold text-sm mb-3">Où habitez-vous ?</p>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <input
              type="text"
              placeholder="Votre ville"
              value={data.ville}
              onChange={e => updateData('ville', e.target.value)}
              className="border-2 border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-[#0066ff] focus:outline-none"
              required
              autoFocus
            />
            <input
              type="text"
              placeholder="Code postal"
              value={data.codePostal}
              onChange={e => updateData('codePostal', e.target.value)}
              className="border-2 border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-[#0066ff] focus:outline-none"
              pattern="[0-9]{5}"
              required
            />
          </div>

          <p className="text-[#0a0f1e] font-semibold text-sm mb-2">C'est urgent ?</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {[
              { id: 'urgent', label: '🚨 Oui, urgence 24h', color: '#ef4444' },
              { id: 'normal', label: '📅 Non, cette semaine', color: '#6b7280' },
            ].map(u => (
              <button
                key={u.id}
                type="button"
                onClick={() => updateData('urgence', u.id)}
                className={`p-3 rounded-xl border-2 text-xs font-semibold transition-all ${
                  data.urgence === u.id
                    ? 'border-[#0066ff] bg-[#0066ff]/5 text-[#0066ff]'
                    : 'border-gray-200 text-[#0a0f1e] hover:border-gray-300'
                }`}
              >
                {u.label}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-gray-400 text-xs hover:text-gray-600 transition-colors"
            >
              ← Retour
            </button>
            <button
              type="submit"
              className="flex-1 gradient-cta text-white font-bold text-sm py-3 rounded-xl"
              style={{ background: 'linear-gradient(135deg, #00e5ff, #0066ff)' }}
            >
              Continuer →
            </button>
          </div>
        </form>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <form className="wizard-step" onSubmit={handleSubmit}>
          <p className="text-[#0a0f1e] font-semibold text-sm mb-3">Vos coordonnées</p>

          <div className="space-y-2 mb-4">
            <input
              type="text"
              placeholder="Votre prénom et nom"
              value={data.nom}
              onChange={e => updateData('nom', e.target.value)}
              className="w-full border-2 border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-[#0066ff] focus:outline-none"
              required
              autoFocus
            />
            <input
              type="tel"
              placeholder="Votre téléphone"
              value={data.tel}
              onChange={e => updateData('tel', e.target.value)}
              className="w-full border-2 border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-[#0066ff] focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Votre email"
              value={data.email}
              onChange={e => updateData('email', e.target.value)}
              className="w-full border-2 border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:border-[#0066ff] focus:outline-none"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-gray-400 text-xs hover:text-gray-600 transition-colors"
            >
              ← Retour
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 glow-cta text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
              style={{ background: 'linear-gradient(135deg, #00e5ff, #0066ff)', boxShadow: '0 0 24px rgba(0,229,255,0.45)' }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Envoi…
                </>
              ) : (
                '🎯 Obtenir mon devis gratuit'
              )}
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center mt-2">
            🔒 Vos données sont protégées — Rappel en 15 min
          </p>
        </form>
      )}
    </div>
  );
}
