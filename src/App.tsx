import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="bg-brand-background text-brand-text min-h-screen font-display antialiased">
      <Outlet />
    </div>
  );
}

export default App;
