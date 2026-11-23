import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="gutter py-24 text-center">
      <h1 className="font-display text-6xl font-extrabold">Lost</h1>
      <p className="mt-4">This page has wandered off.</p>
      <Link to="/" className="mt-6 inline-block font-semibold text-toffee-deep underline">Back home</Link>
    </section>
  )
}
