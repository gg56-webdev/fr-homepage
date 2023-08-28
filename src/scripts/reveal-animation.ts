const sections = document.querySelectorAll('[data-scroll-animation]')

const isMotionSafe = window.matchMedia(`(prefers-reduced-motion: no-preference)`).matches === true

if (sections.length > 0 && isMotionSafe) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('motion-safe:opacity-0', 'motion-safe:translate-y-[10%]')
          observer.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '-5%' }
  )

  sections.forEach((section) => {
    section.classList.add(
      'motion-safe:opacity-0',
      'motion-safe:transition',
      'motion-safe:translate-y-[10%]',
      '!duration-300'
    )
    observer.observe(section)
  })
}
