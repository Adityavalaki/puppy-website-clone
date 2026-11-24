import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { puppies, puppyDetail, site } from '../data/content.js'
import { sendEnquiry, validateEnquiry } from '../lib/enquiry.js'
import Paw from '../components/ui/Paw.jsx'
import NotFound from './NotFound.jsx'

function Chapter({ number, children }) {
  return (
    <p className="flex items-center gap-3 font-hand text-lg text-toffee-ink">
      <span className="grid size-9 place-items-center rounded-full border-2 border-toffee-ink font-display text-base font-extrabold">{number}</span>
      {children}
    </p>
  )
}

function EnquiryForm({ pup }) {
  const empty = { name: '', phone: '', email: '', area: '', message: `Hi! I'd love to know more about ${pup.name} (${pup.breed}).`, website: '' }
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ state: 'idle' })

  const update = (event) => setValues({ ...values, [event.target.name]: event.target.value })

  const submit = async (event) => {
    event.preventDefault()
    const found = validateEnquiry(values)
    setErrors(found)
    if (Object.keys(found).length) return
    setStatus({ state: 'sending' })
    const result = await sendEnquiry({ ...values, puppy: `${pup.name} (${pup.slug})` })
    setStatus(result.ok ? { state: 'sent' } : { state: 'error', message: result.message })
    if (result.ok) setValues(empty)
  }

  const field = (name, label, props = {}) => (
    <div className={props.wide ? 'sm:col-span-2' : ''}>
      <label htmlFor={`enquiry-${name}`} className="text-sm font-semibold">
        {label}
        {props.required ? <span className="text-toffee-deep"> *</span> : <span className="font-normal text-cocoa-soft"> (optional)</span>}
      </label>
      {props.textarea ? (
        <textarea id={`enquiry-${name}`} name={name} rows="4" value={values[name]} onChange={update} className="form-input mt-1.5" />
      ) : (
        <input
          id={`enquiry-${name}`}
          name={name}
          type={props.type || 'text'}
          value={values[name]}
          onChange={update}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `enquiry-${name}-error` : undefined}
          className="form-input mt-1.5"
        />
      )}
      {props.hint && !errors[name] && <p className="mt-1 text-xs text-cocoa-soft">{props.hint}</p>}
      {errors[name] && <p id={`enquiry-${name}-error`} className="mt-1 text-sm text-[#b3261e]">{errors[name]}</p>}
    </div>
  )

  return (
    <form noValidate onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      {field('name', 'Your name', { required: true })}
      {field('phone', 'Phone or WhatsApp', { required: true, type: 'tel', hint: 'With country code, e.g. +971 50 123 4567' })}
      {field('email', 'Email', { type: 'email' })}
      {field('area', 'Your area', { hint: 'e.g. Dubai Marina' })}
      {field('message', 'Message', { textarea: true, wide: true })}
      {/* Honeypot: hidden from people, filled in by spam bots. */}
      <input type="text" name="website" value={values.website} onChange={update} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button type="submit" disabled={status.state === 'sending'} className="btn btn-primary disabled:opacity-60">
          {status.state === 'sending' ? 'Sending…' : 'Send enquiry'}
        </button>
        <p role="status" className="text-sm">
          {status.state === 'sent' && 'Thank you! We will get back to you very soon.'}
          {status.state === 'error' && status.message}
        </p>
      </div>
    </form>
  )
}

export default function PuppyDetail() {
  const { slug } = useParams()
  const index = puppies.findIndex((pup) => pup.slug === slug)
  const [shot, setShot] = useState(0)
  if (index === -1) return <NotFound />

  const pup = puppies[index]
  const prev = puppies[(index - 1 + puppies.length) % puppies.length]
  const next = puppies[(index + 1) % puppies.length]
  // Two views of the same photo: the full shot and a close-up crop.
  const shots = [{ label: 'full photo', zoom: false }, { label: 'close-up', zoom: true }]
  const way = puppyDetail.steps[pup.origin]
  const whatsapp = `https://wa.me/971500000000?text=${encodeURIComponent(`Hi TeddyPups! I'd love to know more about ${pup.name} (${pup.breed}).`)}`
  const facts = [
    ['Breed', pup.breed],
    ['Boy or girl', pup.sex === 'boy' ? 'Boy' : 'Girl'],
    ['Age', pup.age],
    ['Where', pup.origin === 'local' ? 'In Dubai' : 'Imported for you'],
  ]

  return (
    <div className="bg-[#f4efe7]">
      <div className="gutter mx-auto max-w-[110rem] pt-8 pb-20">
        <nav aria-label="Breadcrumb" className="text-sm">
          <Link to="/puppies" className="text-toffee-deep underline underline-offset-4">Available puppies</Link> / {pup.name}
        </nav>

        <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <Chapter number="1">hello, it's me</Chapter>
            <div className="paper-stack mt-4">
              <div className="relative aspect-[4/4.4] overflow-hidden rounded-2xl border-[3px] border-cocoa bg-honey-soft">
                <img src={pup.image} alt={`${pup.name}, ${pup.breed} puppy (${shots[shot].label})`} className={`size-full object-cover transition-transform duration-500 ${shots[shot].zoom ? 'scale-150' : ''}`} />
                <button type="button" aria-label="Previous photo" onClick={() => setShot((shot - 1 + shots.length) % shots.length)} className="gallery-arrow left-4">‹</button>
                <button type="button" aria-label="Next photo" onClick={() => setShot((shot + 1) % shots.length)} className="gallery-arrow right-4">›</button>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-cocoa/80 px-3 py-0.5 text-sm font-bold text-milk">{shot + 1} / {shots.length}</span>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              {shots.map((item, i) => (
                <button key={item.label} type="button" aria-label={`Show ${item.label}`} aria-pressed={shot === i} onClick={() => setShot(i)} className="size-24 overflow-hidden rounded-xl border-[3px] border-cocoa/30 aria-pressed:border-toffee-deep">
                  <img src={pup.image} alt="" className={`size-full object-cover ${item.zoom ? 'scale-150' : ''}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:pt-16">
            <div className="rounded-3xl border-[3px] border-cocoa bg-milk p-7 shadow-[8px_10px_0_rgba(42,23,14,0.14)]">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-honey-soft px-3 py-1 text-sm font-semibold"><Paw className="size-3.5 text-toffee" /> Available</span>
              <h1 className="display-title mt-4 text-[clamp(3rem,6vw,4.5rem)]">{pup.name}</h1>
              <p className="mt-2 text-lg text-cocoa-soft">{pup.breed}</p>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                {facts.map(([term, value]) => (
                  <div key={term}>
                    <dt className="font-hand text-sm text-cocoa-soft">{term}</dt>
                    <dd className="text-lg">{value}</dd>
                  </div>
                ))}
              </dl>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-7 w-full">Ask about {pup.name} on WhatsApp</a>
              <a href="#enquiry" className="btn btn-ghost mt-3 w-full">Send an enquiry</a>
            </div>

            <div className="rounded-3xl border-[3px] border-cocoa bg-[#fff8ec] p-7">
              <Chapter number="2">what comes with {pup.name}</Chapter>
              <h2 className="display-title mt-2 text-[clamp(1.6rem,2.4vw,2.1rem)]">Every TeddyPups puppy comes</h2>
              <ul className="mt-4 grid gap-2.5">
                {puppyDetail.checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3"><span aria-hidden="true" className="font-bold text-toffee-deep">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <section aria-labelledby="way-home-title" className="mt-20">
          <Chapter number="3">the way home</Chapter>
          <h2 id="way-home-title" className="display-title mt-2 text-[clamp(2.2rem,4.5vw,4rem)]">{way.title}</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {way.steps.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="grid size-14 place-items-center rounded-full border-[3px] border-cocoa bg-milk font-display text-2xl font-extrabold">{i + 1}</span>
                {i < way.steps.length - 1 && <span aria-hidden="true" className="step-dots" />}
                <h3 className="mt-5 font-display text-xl font-extrabold">{step.title}</h3>
                <p className="mt-1.5 text-cocoa-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="enquiry" aria-labelledby="enquiry-title" className="mt-20 scroll-mt-28 rounded-3xl border-[3px] border-cocoa bg-milk p-[clamp(1.5rem,4vw,3rem)] shadow-[8px_10px_0_rgba(42,23,14,0.14)]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)]">
            <div>
              <Chapter number="4">dear TeddyPups…</Chapter>
              <h2 id="enquiry-title" className="display-title mt-2 text-[clamp(2.2rem,4vw,3.6rem)]">Ask about {pup.name}</h2>
              <p className="mt-4 max-w-[36ch] text-cocoa-soft">
                Leave your details and we will get back to you soon, or <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="underline">message us on WhatsApp</a> for the quickest reply.
              </p>
            </div>
            <EnquiryForm key={pup.slug} pup={pup} />
          </div>
        </section>

        <nav aria-label="More puppies" className="mt-14 grid gap-5 sm:grid-cols-2">
          {[['Previous pup', prev], ['Next pup', next]].map(([label, other]) => (
            <Link key={label} to={`/puppies/${other.slug}`} className="flex items-center gap-4 rounded-3xl border-[3px] border-cocoa bg-milk p-4 hover:bg-honey-soft">
              <img src={other.image} alt="" className="size-16 rounded-full border-2 border-cocoa object-cover" />
              <span>
                <span className="block font-hand text-sm text-cocoa-soft">{label}</span>
                <span className="font-display text-2xl font-extrabold">{other.name}</span>
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
