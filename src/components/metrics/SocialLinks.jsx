import React from 'react'

const SocialLink = ({ platform, handle, url }) => (
  <a 
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-primary/20 hover:border-primary/50 transition-all"
  >
    <div className="text-sm font-mono">
      <div className="text-gray-400">{platform}</div>
      <div className="text-primary">{handle}</div>
    </div>
    <div className="text-secondary">→</div>
  </a>
)

const SocialLinks = () => {
  return (
    <div className="lab-panel p-4">
      <h2 className="text-sm font-mono text-gray-400 mb-4">КАНАЛЫ СВЯЗИ</h2>
      <div className="space-y-2">
        <SocialLink 
          platform="ТЕЛЕГРАМ"
          handle="@ai_vasilenko"
          url="https://t.me/ai_vasilenko"
        />
        <SocialLink 
          platform="ТВИТТЕР"
          handle="@vasilenko_ai"
          url="https://x.com/vasilenko_ai"
        />
      </div>
    </div>
  )
}

export default SocialLinks
