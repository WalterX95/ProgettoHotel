import './App.css'
import CardComponent from './components/CardComponent'
import HeaderComponent from './components/HeaderComponent'
import HeroSectionComponent from './components/HeroSectionComponent'

function App() {


  return (
    <>
  <HeaderComponent></HeaderComponent>
  <HeroSectionComponent titleSection='Vieni a Scoprire i lnostro Hotel'
                        secondTtitle={`L'hotel più bello di Napoli`}
                        descSection='I migliori Hotel di tutta Napoli sono tutti qui'
                        imgSection='/img/home.jpg'></HeroSectionComponent>
  <CardComponent title='Le nostre camere' subTitle='Scegli la tua camera dei sogni'></CardComponent>
    </>
  )
}

export default App
