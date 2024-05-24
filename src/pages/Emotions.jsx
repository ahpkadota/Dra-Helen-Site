import TipBox from "../components/TipBox";
import tips from "../data/tips.json";

export default function Tips() {
  return (
    <main>
      <TipBox data={tips.emotions}/>
    </main>
  );
}
