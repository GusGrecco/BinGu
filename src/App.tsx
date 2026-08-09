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
import { useBingoGame } from './hooks/use-bingo-game';

function App() {
  const { gameState, drawNumber } = useBingoGame();
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar>
        <SidebarBranding />
        <SidebarSection><SidebarStats gameState={gameState} /></SidebarSection>
        <SidebarSection><CardTypeIndicator cardType={gameState.cardType} /></SidebarSection>
        <SidebarSection withDivider><PrizeInfo prize={gameState.prize} /></SidebarSection>
      </Sidebar>
      <main className="flex-1 p-6 w-full">
        <NumberBoard gameState={gameState} onSelectNumber={drawNumber} />
      </main>
    </div>
  )
}

export default App
