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
  CallHistory
} from './components/bingo';
import { useBingoGame } from './hooks/use-bingo-game';
import { getTotalCalls } from './store/bingo';

function App() {
  const { gameState, drawNumber, undoLastCall, resetGame } = useBingoGame();
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar>
        <SidebarBranding />
        <SidebarSection><SidebarStats gameState={gameState} /></SidebarSection>
        <SidebarSection><CardTypeIndicator cardType={gameState.cardType} /></SidebarSection>
        <SidebarSection withDivider><PrizeInfo prize={gameState.prize} /></SidebarSection>
      </Sidebar>
      <main className="flex flex-col flex-1 p-6 max-w-155 gap-5">
        <NumberBoard gameState={gameState} onSelectNumber={drawNumber} />
        <GameControls
          totalCalls={getTotalCalls(gameState)}
          onUndoLastCall={undoLastCall}
          onResetGame={resetGame}
        />
      </main>
      <CallHistory gameState={gameState} />
    </div>
  )
}

export default App
