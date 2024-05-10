import ContentBlock from "../components/ContentBlock";
import ContentHeader from "../components/ContentHeader";

export default function Treatments(props) {
  let header = props.props.header;
  let text = props.props.text
  let img = props.props.img
  return (
    <main>
      <ContentHeader img={img} content={header}/>
      <ContentBlock content={text}/>
    </main>
  );
}
