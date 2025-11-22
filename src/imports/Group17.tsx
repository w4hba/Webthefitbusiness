import imgImage3 from "figma:asset/b1b32578096800c5cc20a56451880a43842ac55a.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[807px] left-0 top-0 w-[1535px]" data-name="image 3">
        <img alt="" className="block max-w-none size-full" height="807" src={imgImage3} width="1535" />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
    </div>
  );
}

export default function Group2() {
  return (
    <div className="relative size-full">
      <Group1 />
    </div>
  );
}