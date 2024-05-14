import faqData from "../faq.json";
import FaqItem from "./FaqItem";

export default function Faq() {
  const id = "accordionExample";
  const faqItems = Object.keys(faqData).map((item) => {
    return (
      <FaqItem
        header={faqData[item].header}
        text={faqData[item].text}
        id={item}
        parentId={id}
      ></FaqItem>
    );
  });
  return (
    <section className="pb-5 pt-5" id="faq">
      <div className="container pb-5 pt-5">
        <h3>Perguntas Frequentes</h3>
        <div className="accordion" id={id}>
          {faqItems}
        </div>
      </div>
    </section>
  );
}
