import Header from './header'
import About from './section-about'
import Features from './section-features'
import Stories from './section-stories'
import Book from './section-book'
import Footer from './footer'
import Navigator from './navigator'

export default function Home() {
      return <div>
             <Navigator />
             <Header />
             <About />
             <Features />
             <Stories />
             <Book />
             <Footer />
          </div>
}