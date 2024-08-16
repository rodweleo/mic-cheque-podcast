import NowPlayingBar from './components/now-playing-bar'
import './index.css'
import Home from './pages/Home'

function App() {

  return (
    <main className='bg-yellow-100 w-full'>
      <header className='w-full  bg-yellow-300 backdrop-blur-xl  py-7 shadow-md sticky top-0 z-50'>
        <section className='flex justify-around w-full'>
          <a href="" className='font-bold'>MiCheque</a>
          <ul className='flex gap-10 font-semibold'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Episodes</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </section>
      </header>
      <section className='sticky top-20 z-50'>
        <NowPlayingBar/>
      </section>
      <section>
        <Home/>
      </section>
      <footer className="p-10">
        <div className="space-y-2.5 max-w-lg">
          <h1 className="font-bold sm:text-3xl">MiCheque</h1>
          <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum rerum consequuntur dolorum explicabo eius beatae ducimus ab accusantium facilis ex assumenda culpa doloribus nobis atque iure, laborum maxime aliquid?</p>
        </div>
      </footer>
    </main>
  )
}

export default App
