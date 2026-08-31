import React from 'react';
import './App.css'
import {
  Sidebar,
  SidebarSection,
  SidebarStats,
  CardTypeIndicator,
  NumberBoard,
  PrizeInfo,
  GameControls,
  CallHistory,
  GameSetupModal,
  GameSetupForm,
  SidebarBranding
} from './components/bingo';
import { createPrizeFromSetup } from './lib/prize/create-prize-from-setup';
import { ConfirmDialog } from './components/ui';
import { useBingoStore } from './store/bingo';

function App() {
  const initGame = useBingoStore((state) => state.initGame);
  const resetGame = useBingoStore((state) => state.resetGame);

  const [isSetupOpen, setIsSetupOpen] = React.useState(true);
  const [isRestartConfirmOpen, setIsRestartConfirmOpen] = React.useState(false);

  const handleConfirmRestart = () => {
    resetGame();
    setIsRestartConfirmOpen(false);
    setIsSetupOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Sidebar>
        <SidebarSection>
          <SidebarBranding />
        </SidebarSection>
        <div className="flex flex-row gap-6 lg:flex-col justify-between">
          <SidebarSection>
            <SidebarStats />
          </SidebarSection>
          <SidebarSection>
            <CardTypeIndicator />
          </SidebarSection>
          <SidebarSection>
            <PrizeInfo />
          </SidebarSection>
        </div>

      </Sidebar>

      <main className="flex flex-1 flex-col xl:flex-row p-6 gap-5 mt-90 lg:mt-0 md:w-full lg:ml-64">
        <div className="flex flex-col gap-4 xl:h-full xl:w-full md:items-center lg:min-w-140">
          <NumberBoard />
          <GameControls onRestartRequest={() => setIsRestartConfirmOpen(true)} />
        </div>
        <div className="flex flex-col gap-4 xl:min-w-60 xl:w-full">
          <CallHistory />
        </div>
      </main>

      <ConfirmDialog
        open={isRestartConfirmOpen}
        title="Reiniciar jogo"
        description="Os números sorteados e a configuração atual (tipo de cartela e prêmio) serão apagados. Você vai configurar um novo jogo em seguida."
        confirmLabel="Reiniciar"
        onConfirm={handleConfirmRestart}
        onCancel={() => setIsRestartConfirmOpen(false)}
      />

      <GameSetupModal open={isSetupOpen} onClose={() => setIsSetupOpen(false)} dismissible={false}>
        <GameSetupForm
          onSubmit={(values) => {
            const prize = createPrizeFromSetup(values);
            initGame(values.cardType, prize);
            setIsSetupOpen(false);
          }}
          onCancel={() => setIsSetupOpen(false)}
        />
      </GameSetupModal>
    </div>
  );
}

export default App
