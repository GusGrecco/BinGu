import './App.css'
import { Sidebar } from './components/bingo/sidebar'

function App() {

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar>
        {/* SidebarBranding — sub-issue de branding */}
        {/* <SidebarSection><SidebarStats /></SidebarSection> — sub-issue de stats */}
        {/* <SidebarSection><SidebarCardType /></SidebarSection> — sub-issue de tipo de cartela */}
        {/* <SidebarSection withDivider><SidebarPrize /></SidebarSection> — sub-issue de prêmio */}
      </Sidebar>
      <main className="flex-1 p-6">{/* Number board, header, etc. */}</main>
    </div>
  )
}

export default App
