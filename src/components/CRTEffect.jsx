import React from 'react'

export default function CRTEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-[0.02]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjIiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
      <div className="absolute inset-0 animate-scan" />
    </div>
  )
}
