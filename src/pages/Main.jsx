import Hero from "../components/Hero";
import Faq from "../components/Faq";
import TreatList from "../components/TreatList";

import main from "../assets/img/helen-main.jpg"

export default function Main() {
  return (
    
    <main>
      <Hero main={main}/>
      <TreatList />
      <Faq />
    </main>
  );
}
