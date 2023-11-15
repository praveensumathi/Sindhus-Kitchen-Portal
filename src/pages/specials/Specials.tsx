import SpecialCard from "./SpecialCard";
import { SpeicalsData } from "../../seed-data/seed-data";

function Specials() {
  return (
    <div>
      <SpecialCard specials={SpeicalsData} />
    </div>
  );
}

export default Specials;
