export const isMotionSafe = window.matchMedia(`(prefers-reduced-motion: no-preference)`).matches === true

const $sections = document.querySelectorAll('[data-scroll-animation]')

if ($sections.length > 0 && isMotionSafe) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('motion-safe:opacity-0', 'motion-safe:translate-y-[50px]')
          observer.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '-5%' },
  )

  $sections.forEach((section) => {
    section.classList.add(
      'motion-safe:opacity-0',
      'motion-safe:transition',
      'motion-safe:translate-y-[50px]',
      '!duration-300',
    )
    observer.observe(section)
  })
}
