import type { CSSProperties } from 'react'

/** Light beams: where they hang (right edge %), how wide, and the angle range they sway between. */
const beams = [
  { right: '34%', width: '9rem', from: '10deg', to: '30deg', delay: '0s', tone: 'from-brand/90' },
  { right: '18%', width: '5rem', from: '4deg', to: '22deg', delay: '-3s', tone: 'from-brand-glow/80' },
  { right: '4%', width: '11rem', from: '-4deg', to: '14deg', delay: '-6s', tone: 'from-brand/80' },
]

/** Embers drifting up out of the glow. Fixed values, so server and client render the same markup. */
const embers = [
  { left: '12%', top: '78%', size: 3, delay: '0s', duration: '8s' },
  { left: '26%', top: '64%', size: 2, delay: '-2.4s', duration: '9s' },
  { left: '38%', top: '86%', size: 4, delay: '-5s', duration: '7s' },
  { left: '49%', top: '70%', size: 2, delay: '-1.2s', duration: '10s' },
  { left: '58%', top: '82%', size: 3, delay: '-6.5s', duration: '8.5s' },
  { left: '67%', top: '60%', size: 2, delay: '-3.6s', duration: '9.5s' },
  { left: '76%', top: '88%', size: 4, delay: '-4.4s', duration: '7.5s' },
  { left: '85%', top: '72%', size: 3, delay: '-7.8s', duration: '8s' },
  { left: '92%', top: '58%', size: 2, delay: '-0.6s', duration: '10.5s' },
]

/**
 * Red stage light for the right side of the hero: swaying beams, a breathing glow, a faint grid and rising embers.
 * Decorative only. Parent needs `relative isolate overflow-hidden`.
 */
export function HeroLight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 -z-20 w-full overflow-hidden opacity-60 [mask-image:linear-gradient(to_left,#000_35%,transparent_100%)] sm:opacity-80 lg:w-[62%] lg:opacity-100"
    >
      {/* Faint grid, fading out from the light's source in the top-right corner */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_75%_at_85%_8%,#000_0%,transparent_75%)]" />

      {/* Beams hang from the top edge and sway */}
      {beams.map((beam) => (
        <div
          key={beam.right}
          className={`absolute -top-24 h-[75rem] origin-top bg-gradient-to-b ${beam.tone} via-brand/20 to-transparent blur-xl mix-blend-screen animate-beam-sway motion-reduce:animate-none`}
          style={
            {
              right: beam.right,
              width: beam.width,
              animationDelay: beam.delay,
              '--beam-from': beam.from,
              '--beam-to': beam.to,
            } as CSSProperties
          }
        />
      ))}

      {/* Core glow where the beams meet */}
      <div className="absolute -right-24 -top-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,60,60,0.55)_0%,rgba(230,0,0,0.24)_35%,transparent_68%)] animate-glow-breathe motion-reduce:animate-none" />

      {/* Embers */}
      {embers.map((ember) => (
        <span
          key={ember.left}
          className="absolute rounded-full bg-brand-glow shadow-[0_0_8px_2px_rgba(255,60,60,0.7)] animate-ember-rise motion-reduce:hidden"
          style={{
            left: ember.left,
            top: ember.top,
            width: ember.size,
            height: ember.size,
            animationDelay: ember.delay,
            animationDuration: ember.duration,
          }}
        />
      ))}

      {/* Keep the bottom edge from showing a seam against the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  )
}
