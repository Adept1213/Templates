import "./style.css";

const Block = ({ text, id }: { text: string; id: number }) => (
  <div className="block">
    {id} - {text}
  </div>
);
export default Block;
