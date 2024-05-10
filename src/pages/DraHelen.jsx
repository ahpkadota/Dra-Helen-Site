import Carousel from "../components/Carousel";
import Academic from "../components/Academic";
import Certifications from "../components/Certifications";
import Books from "../components/Books";

import carousel1 from "../assets/img/helen-carousel1.jpg"
import carousel2 from "../assets/img/helen-carousel2.jpg"
import academic from "../assets/img/helen-academic.jpg"
import book1 from "../assets/img/livro-primeiros-contatos.jpg"
import book2 from "../assets/img/livro-fotopoemas.jpg"

export default function DraHelen() {
  return (
    <main>
      <Carousel carousel1={carousel1} carousel2={carousel2}/>
      <Academic academic={academic}/>
      <Certifications/>
      <Books book1={book1} book2={book2}/>
    </main>
  );
}
