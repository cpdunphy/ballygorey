import React from 'react'

interface BadgeProps {
  color?: string
  children: React.ReactNode
}

export default function Badge({ color, children }: BadgeProps) {
  return (
    <div
      className={`mt-2 rounded-full border px-3 py-1 text-xs`}
      style={{
        borderColor: color,
        borderWidth: 1,
      }}
    >
      {children}
    </div>
  )
}
