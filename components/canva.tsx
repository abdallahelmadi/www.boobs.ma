"use client"
import { useEffect, useRef } from "react"

type Wave = {
  offset: number
  speed: number
  amplitude: number
  thickness: number
  opacity: number
}

export function Canva(): React.ReactNode {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    let animation = 0

    const mouse = {
      x: 0,
      y: 0,
      active: false,
    }

    const waves: Wave[] = Array.from({ length: 12 }, () => ({
      offset: Math.random() * 1000,
      speed: 0.0003 + Math.random() * 0.0008,
      amplitude: 40 + Math.random() * 80,
      thickness: 100 + Math.random() * 160,
      opacity: 0.015 + Math.random() * 0.03,
    }))

    const resize = () => {
      width = document.documentElement.clientWidth
      height = document.documentElement.scrollHeight

      const ratio = window.devicePixelRatio || 1

      canvas.width = width * ratio
      canvas.height = height * ratio

      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    resize()

    const observer = new ResizeObserver(resize)
    observer.observe(document.body)

    window.addEventListener("resize", resize)

    const move = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY + window.scrollY
      mouse.active = true
    }

    window.addEventListener("mousemove", move)

    const animate = () => {
      const time = performance.now()

      ctx.clearRect(0, 0, width, height)

      waves.forEach((wave, index) => {
        ctx.beginPath()

        const baseY =
          ((index + 1) * height) / (waves.length + 1)

        for (let x = -100; x <= width + 100; x += 8) {
          let y =
            baseY +
            Math.sin(x * 0.003 + time * wave.speed + wave.offset) *
              wave.amplitude

          if (mouse.active) {
            const dx = x - mouse.x
            const dy = y - mouse.y

            const distance = Math.sqrt(dx * dx + dy * dy)

            const influence = Math.max(
              0,
              1 - distance / 300
            )

            y -= influence * 80
          }

          if (x === -100)
            ctx.moveTo(x, y)
          else
            ctx.lineTo(x, y)
        }

        ctx.lineTo(width + 200, height + 200)
        ctx.lineTo(-200, height + 200)
        ctx.closePath()

        const gradient = ctx.createLinearGradient(
          0,
          baseY - wave.thickness,
          0,
          baseY + wave.thickness
        )

        gradient.addColorStop(
          0,
          "rgba(0,0,0,0)"
        )

        gradient.addColorStop(
          0.5,
          `rgba(0,0,0,${wave.opacity})`
        )

        gradient.addColorStop(
          1,
          "rgba(0,0,0,0)"
        )

        ctx.fillStyle = gradient
        ctx.fill()
      })

      animation = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animation)
      observer.disconnect()
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", move)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
    />
  )
}