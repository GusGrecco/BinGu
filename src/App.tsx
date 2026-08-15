import React from 'react';
import './App.css'
import {
  Sidebar,
  SidebarSection,
  SidebarStats,
  SidebarBranding,
  CardTypeIndicator,
  PrizeInfo,
  NumberBoard,
  GameControls,
  CallHistory,
  GameSetupModal,
  GameSetupForm
} from './components/bingo';
import { useBingoGame } from './hooks/use-bingo-game';
import { getTotalCalls } from './store/bingo';

function App() {
  const { gameState, drawNumber, undoLastCall, resetGame } = useBingoGame();
  const [isSetupOpen, setIsSetupOpen] = React.useState(true);
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar>
        <SidebarBranding />
        <SidebarSection><SidebarStats gameState={gameState} /></SidebarSection>
        <SidebarSection><CardTypeIndicator cardType={gameState.cardType} /></SidebarSection>
        <SidebarSection withDivider><PrizeInfo prize={gameState.prize} /></SidebarSection>
      </Sidebar>

      <main className="flex flex-col xl:flex-row p-6 gap-5 md:w-full">
        <div className="flex flex-col gap-4 xl:h-full xl:w-full md:items-center lg:min-w-140">
          <NumberBoard gameState={gameState} onSelectNumber={drawNumber} />
          <GameControls
            totalCalls={getTotalCalls(gameState)}
            onUndoLastCall={undoLastCall}
            onResetGame={resetGame}
          />
        </div>
        <div className="flex flex-col gap-4 xl:min-w-60 xl:w-full">
          <CallHistory gameState={gameState} />
        </div>
      </main>
      <GameSetupModal open={isSetupOpen} onClose={() => setIsSetupOpen(false)}>
        <GameSetupForm
          onSubmit={() => {
            // próxima subtarefa: inicializar o game state com esses valores
            setIsSetupOpen(false);
          }}
          onCancel={() => setIsSetupOpen(false)}
        />
      </GameSetupModal>
    </div>
  )
}

export default App
