import React from 'react'
import TopBar from './TopBar'
import MainDisplay from './MainDisplay'
import SidePanel from './SidePanel'

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-bgDark text-textPrimary overflow-hidden">
      <div className="grid-overlay absolute inset-0 pointer-events-none" />
      
      <div className="relative h-screen p-4 gap-4 flex flex-col">
        {/* Top Status Bar */}
        <TopBar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex gap-4 overflow-hidden">
          {/* Left Side Panel */}
          <SidePanel position="left" />
          
          {/* Main Central Display */}
          <MainDisplay />
          
          {/* Right Side Panel */}
          <SidePanel position="right" />
        </div>
      </div>
    </div>
  )
}
