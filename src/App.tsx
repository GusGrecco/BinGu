import React from 'react';
import './App.css'
import {
  Sidebar,
  SidebarSection,
  SidebarStats,
  SidebarBranding,
  CardTypeIndicator
} from './components/bingo';
import { INITIAL_BINGO_GAME_STATE } from './constants';

function App() {
  const [gameState] = React.useState(INITIAL_BINGO_GAME_STATE);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar>
        <SidebarBranding />
        <SidebarSection><SidebarStats gameState={gameState} /></SidebarSection>
        <SidebarSection><CardTypeIndicator cardType={gameState.cardType} /></SidebarSection>
        {/* <SidebarSection withDivider><SidebarPrize /></SidebarSection> — sub-issue de prêmio */}
      </Sidebar>
      <main className="flex-1 p-6">{/* Number board, header, etc. */}</main>
    </div>
  )
}

export default App
