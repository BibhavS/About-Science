import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries:{
        refetchOnWindowFocus: false
      }
    }
  })
  return (
    <>
     <QueryClientProvider client={client}>    
      <Navbar/>
      <News/>
     </QueryClientProvider>
    </>
  );
}

export default App;