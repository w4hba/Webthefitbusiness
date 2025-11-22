import imgImage from "figma:asset/2f1a59bec263a5bed0a899a611870bb0cfe8aecc.png";
import imgImage1 from "figma:asset/5f24144cb4e8c18ea66eb4f45cd86a0b6cc1453c.png";

function Container() {
  return (
    <div className="absolute h-[488px] left-0 rounded-[14px] top-0 w-[357px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="absolute h-[96px] left-[33px] top-[270px] w-[281px]" data-name="Testimonials6">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[12px] top-[0.5px] tracking-[-0.3125px] w-[274px]">I feel so much better about myself after working with Coach Paul. He made fitness and dieting so simple for me. He gave me my fire back!! “Bring the thunder!”</p>
    </div>
  );
}

function Testimonials1() {
  return (
    <div className="absolute bg-black h-[28px] left-[33px] top-[384px] w-[291px]" data-name="Testimonials7">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[12px] not-italic text-[14px] text-nowrap text-white top-[5px] tracking-[-0.1504px] whitespace-pre">-25lbs of Fat in 6 Months</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-[-0.5px] w-[122.992px]" data-name="Paragraph4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">Tommy Brockton</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[20px] left-0 top-[24.5px] w-[170.664px]" data-name="Paragraph5">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">{`Owner of Brockton’s Grille `}</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[44px] left-[33px] top-[428px] w-[118.602px]" data-name="Container2">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute left-[250px] size-[74px] top-[413px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[354.242px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-[257px] items-start left-0 overflow-clip shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[357px]" data-name="Container">
      <Image1 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="Card2">
      <Container />
      <Testimonials />
      <Testimonials1 />
      <Container2 />
      <Image />
      <Container1 />
    </div>
  );
}