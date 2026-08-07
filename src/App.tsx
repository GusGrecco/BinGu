import React from 'react';
import './App.css'
import { Sidebar, SidebarSection } from './components/bingo/sidebar'
import { SidebarStats } from './components/bingo/sidebar-stats/sidebar-stats'
import { INITIAL_BINGO_GAME_STATE } from './constants';

function App() {
  const [gameState] = React.useState(INITIAL_BINGO_GAME_STATE);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar>
        {/* SidebarBranding — sub-issue de branding */}
         <SidebarSection><SidebarStats gameState={gameState}/></SidebarSection>
        {/* <SidebarSection><SidebarCardType /></SidebarSection> — sub-issue de tipo de cartela */}
        {/* <SidebarSection withDivider><SidebarPrize /></SidebarSection> — sub-issue de prêmio */}
      </Sidebar>
      <main className="flex-1 p-6">{/* Number board, header, etc. */}</main>
    </div>
  )
}

export default App
