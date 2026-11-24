import { useState } from 'react'
import { contactPage, puppies, site } from '../data/content.js'
import { sendEnquiry, validateEnquiry } from '../lib/enquiry.js'

const empty = { name: '', phone: '', email: '', area: '', puppy: '', message: '', website: '' }

export default function Contact() {
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
    const result = await sendEnquiry(values)
    setStatus(result.ok ? { state: 'sent' } : { state: 'error', message: result.message })
    if (result.ok) setValues(empty)
  }

  // A fill-in-the-blank input that sits inside the letter's sentence.
  const blank = (name, label, props = {}) => (
    <input
      name={name}
      aria-label={label}
      aria-invalid={Boolean(errors[name])}
      value={values[name]}
      onChange={update}
      {...props}
      className={`letter-blank ${errors[name] ? 'letter-blank--error' : ''}`}
    />
  )

  return (
    <div className="bg-linear-to-b from-[#fff9ee] to-[#f9dca4] pb-28">
      <section aria-labelledby="contact-title" className="gutter mx-auto grid max-w-[110rem] gap-8 pt-[clamp(2.5rem,6vh,4rem)] lg:grid-cols-2 lg:items-end">
        <h1 id="contact-title" className="display-title max-w-[9ch] text-[clamp(3rem,8.5vw,8rem)]">{contactPage.title}</h1>
        <p className="max-w-[46ch] text-[clamp(1.05rem,1.4vw,1.3rem)] text-cocoa-soft">{contactPage.lede}</p>
      </section>

      <div className="gutter mx-auto mt-12 grid max-w-[110rem] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="grid min-w-0 gap-8">
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp justify-self-start">WhatsApp {site.phoneDisplay}</a>
          <dl className="grid gap-5">
            <div>
              <dt className="font-hand text-cocoa-soft">call us</dt>
              <dd><a href={site.phoneHref} className="text-lg text-toffee-deep underline underline-offset-4">{site.phoneDisplay}</a></dd>
            </div>
            <div>
              <dt className="font-hand text-cocoa-soft">email</dt>
              <dd><a href={`mailto:${site.email}`} className="text-lg break-all text-toffee-deep underline underline-offset-4">{site.email}</a></dd>
            </div>
          </dl>

          <section aria-labelledby="visit-title" className="overflow-hidden rounded-2xl border-[3px] border-cocoa bg-[#fff6e3]">
            <div aria-hidden="true" className="h-7 border-b-[3px] border-cocoa bg-[repeating-linear-gradient(90deg,var(--color-toffee)_0_1.3rem,var(--color-milk)_1.3rem_2.6rem)]" />
            <div className="grid gap-6 p-7 sm:grid-cols-[minmax(0,1fr)_10rem] sm:items-end">
              <div>
                <h2 id="visit-title" className="display-title text-[clamp(1.8rem,2.6vw,2.3rem)]">{contactPage.visitTitle}</h2>
                <p className="mt-3 text-cocoa-soft">{contactPage.visitText}</p>
                <p className="mt-4 font-semibold">{site.address}</p>
                <a href={contactPage.mapsHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-5">{contactPage.mapsCta}</a>
              </div>
              <img src={contactPage.visitImage} alt="A puppy at the TeddyPups showroom" loading="lazy" className="aspect-[4/5] w-full rounded-t-full border-[3px] border-cocoa object-cover" />
            </div>
          </section>
        </div>

        {/* The contact form, written as a letter with blanks to fill in. */}
        <form noValidate onSubmit={submit} aria-labelledby="letter-title" className="letter min-w-0">
          <p id="letter-title" className="font-hand text-2xl text-toffee-ink">Dear TeddyPups,</p>
          <p className="mt-5 leading-[2.6]">
            my name is {blank('name', 'Your name (required)', { autoComplete: 'name' })}, and you can reach me on{' '}
            {blank('phone', 'Phone or WhatsApp (required)', { type: 'tel', placeholder: '+971 50 123 4567', autoComplete: 'tel' })} or by email at{' '}
            {blank('email', 'Email (optional)', { type: 'email', placeholder: 'optional', autoComplete: 'email' })}. I live in{' '}
            {blank('area', 'Your area (optional)', { placeholder: 'e.g. Dubai Marina' })}, and I'm curious about{' '}
            <select name="puppy" aria-label="Puppy you're interested in (optional)" value={values.puppy} onChange={update} className="letter-blank">
              <option value="">any puppy (not sure yet)</option>
              {puppies.map((pup) => (
                <option key={pup.slug} value={pup.slug}>{pup.name} ({pup.breed}, {pup.sex})</option>
              ))}
            </select>
            .
          </p>
          <textarea name="message" aria-label="Your message (optional)" rows="4" value={values.message} onChange={update} placeholder="Anything else you'd like to tell us…" className="letter-lines mt-6" />
          <input type="text" name="website" value={values.website} onChange={update} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

          {Object.keys(errors).length > 0 && (
            <ul role="alert" className="mt-4 list-disc pl-5 text-sm text-[#b3261e]">
              {Object.values(errors).map((message) => <li key={message}>{message}</li>)}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="font-hand text-lg">with love, a future puppy parent</p>
            <button type="submit" disabled={status.state === 'sending'} className="btn btn-primary disabled:opacity-60">
              {status.state === 'sending' ? 'Posting…' : 'Post my letter'}
            </button>
          </div>
          <p role="status" className="mt-3 text-sm">
            {status.state === 'sent' && 'Your letter is on its way! We will reply very soon.'}
            {status.state === 'error' && status.message}
          </p>
        </form>
      </div>
    </div>
  )
}
