import React from 'react'
import StatusIndicator from './StatusIndicator'
import ProgressBar from './ProgressBar'
import ScanningEffect from './ScanningEffect'

export default function LabMetrics() {
  return (
    <div className="grid gap-4 p-4">
      <div className="grid grid-cols-2 gap-4">
        <StatusIndicator label="Система" />
        <StatusIndicator label="Настроение" status="ОТЛИЧНОЕ" />
      </div>
      
      <div className="space-y-4">
        <ProgressBar label="Уровень Позитива" value={98} />
        <ProgressBar label="Мощность Улыбок" value={100} />
        <ProgressBar label="Энергия Радости" value={95} />
      </div>

      <ScanningEffect />
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-dark/50 p-3 rounded-lg">
          <div className="text-xs text-gray-400 mb-1">TON NETWORK</div>
          <div className="text-primary text-lg font-bold">CONNECTED</div>
        </div>
        <div className="bg-dark/50 p-3 rounded-lg">
          <div className="text-xs text-gray-400 mb-1">AI STATUS</div>
          <div className="text-secondary text-lg font-bold">HAPPY</div>
        </div>
      </div>
    </div>
  )
}
