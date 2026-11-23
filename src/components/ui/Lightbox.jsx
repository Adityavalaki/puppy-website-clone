import { useEffect, useRef } from 'react'

// Full-screen photo viewer. `index` is the open photo (null = closed). A native <dialog> gives
// Escape-to-close, focus trapping and a backdrop; arrow keys move between photos.
export default function Lightbox({ photos, index, onChange, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (index !== null && !dialog.open) dialog.showModal()
    if (index === null && dialog.open) dialog.close()
  }, [index])

  const go = (step) => onChange((index + step + photos.length) % photos.length)

  return (
    <dialog
      ref={dialogRef}
      aria-label="Photo viewer"
      onClose={onClose}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') go(1)
        if (event.key === 'ArrowLeft') go(-1)
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-cocoa/95 p-0 text-milk backdrop:bg-cocoa/70"
    >
      {index !== null && (
        <div className="gutter flex h-full flex-col py-3">
          <div className="flex items-center justify-between gap-4">
            <p className="font-hand" aria-live="polite">
              {index + 1} / {photos.length} — {photos[index].caption}
            </p>
            <button type="button" onClick={() => dialogRef.current.close()} className="h-11 shrink-0 rounded-full bg-milk px-5 font-semibold text-cocoa">
              Close
            </button>
          </div>
          <img src={photos[index].src} alt={photos[index].caption} className="mx-auto my-4 min-h-0 flex-1 rounded-md object-contain" />
          <div className="flex justify-center gap-3">
            <button type="button" onClick={() => go(-1)} className="h-12 rounded-full border-2 border-milk px-6 font-semibold hover:bg-milk hover:text-cocoa">
              Previous
            </button>
            <button type="button" onClick={() => go(1)} className="h-12 rounded-full bg-honey px-6 font-semibold text-cocoa">
              Next
            </button>
          </div>
        </div>
      )}
    </dialog>
  )
}
