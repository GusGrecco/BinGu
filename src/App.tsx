import React from 'react';
import './App.css'
import {
  Sidebar,
  SidebarSection,
  SidebarStats,
  SidebarBranding,
  CardTypeIndicator,
  PrizeInfo,
  NumberBoard
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
        <SidebarSection withDivider><PrizeInfo prize={gameState.prize} /></SidebarSection>
      </Sidebar>
      <main className="flex-1 p-6 w-full">
        <NumberBoard />
      </main>
    </div>
  )
}

export default App
