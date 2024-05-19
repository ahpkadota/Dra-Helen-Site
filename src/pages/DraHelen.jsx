import Carousel from "../components/Carousel";
import Academic from "../components/Academic";
import Certifications from "../components/Certifications";
import carousel1 from "../assets/img/helen-carousel1.jpg";
import carousel2 from "../assets/img/helen-carousel2.jpg";
import carousel3 from "../assets/img/helen-carousel3.jpg";
import carousel4 from "../assets/img/helen-carousel4.jpg";
import academic1 from "../assets/img/helen-academic1.jpg";
import academic2 from "../assets/img/helen-academic2.jpg";
import academic3 from "../assets/img/helen-academic3.jpg";

export default function DraHelen() {
  return (
    <main>
      <Carousel
        imgs={[carousel1, carousel2, carousel3, carousel4]}
      />
      <Academic academic={academic1} imgs={[academic1, academic2, academic3]} />
      <Certifications />
    </main>
  );
}
