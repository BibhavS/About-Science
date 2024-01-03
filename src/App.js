import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';
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
      <Footer/>
     </QueryClientProvider>
    </>
  );
}

export default App;