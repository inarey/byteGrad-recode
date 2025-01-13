import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main className='flex flex-col justify-center items-center gap-3 h-screen bg-teal-900'>
        <Card />
        <Footer />
      </main>
    </>
  );
}

export default App;
