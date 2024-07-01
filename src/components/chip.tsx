import React from 'react'

interface BadgeProps {
  color?: string
  children: React.ReactNode
}

export default function Badge({ color, children }: BadgeProps) {
  function adjustBrightness(
    hex: string,
    percent: number,
    opacity: number
  ): string {
    let r = parseInt(hex.slice(1, 3), 16)
    let g = parseInt(hex.slice(3, 5), 16)
    let b = parseInt(hex.slice(5, 7), 16)

    r = Math.round(Math.min(255, Math.max(0, r + (255 * percent) / 100)))
    g = Math.round(Math.min(255, Math.max(0, g + (255 * percent) / 100)))
    b = Math.round(Math.min(255, Math.max(0, b + (255 * percent) / 100)))

    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

  const lightVariant: string = color ? adjustBrightness(color, 30, 0.2) : ''

  return (
    <div
      className={`mt-2 rounded-full bg-gray-400/20 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300`}
      style={{
        backgroundColor: lightVariant,
        color: color,
      }}
    >
      {children}
    </div>
  )
}
