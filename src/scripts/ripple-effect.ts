import { isMotionSafe } from './reveal-animation'

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

if (isMotionSafe && !isTouchDevice) {
  const $canvas = document.createElement('canvas')
  $canvas.classList.add('fixed', 'pointer-events-none', 'blur', 'z-50')
  document.body.append($canvas)

  const resizeCanvas = () => {
    $canvas.height = window.innerHeight
    $canvas.width = window.innerWidth
  }

  resizeCanvas()

  const ctx = $canvas.getContext('2d')!

  const particlesArray: Array<Particle> = []

  class Particle {
    x
    y
    radius = 15
    opacity = 1

    constructor(x: number, y: number) {
      this.x = x
      this.y = y
    }

    draw() {
      this.opacity -= 0.025
      this.radius += 3

      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.strokeStyle = `hsl(197,67%,45%,${this.opacity})`
      ctx.stroke()

      if (this.opacity <= 0) {
        const index = particlesArray.indexOf(this)
        particlesArray.splice(index, 1)
      }
    }
  }

  window.addEventListener('resize', resizeCanvas)

  window.addEventListener(
    'mousemove',
    ({ x, y }) => {
      particlesArray.push(new Particle(x, y))
    },
    { passive: true }
  )

  function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    particlesArray.forEach((particle) => particle.draw())
    requestAnimationFrame(animate)
  }

  animate()
}
