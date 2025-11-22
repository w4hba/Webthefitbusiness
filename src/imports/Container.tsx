import imgImage from "figma:asset/a5891274690dbec5a0e060ec28a2e0f624599a23.png";

function Image() {
  return (
    <div className="h-[734.25px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[506px] items-start left-0 overflow-clip pb-0 pr-0 top-0 w-[525px]" data-name="Container">
      <Image />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container />
    </div>
  );
}