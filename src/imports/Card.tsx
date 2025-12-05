import imgImage from "../assets/2f1a59bec263a5bed0a899a611870bb0cfe8aecc.png?url";
import imgImage1 from "../assets/35f2a1787f5f0237e97b82c61f4599eceb08c072.png?url";

function Container() {
  return (
    <div className="absolute h-[488px] left-0 rounded-[14px] top-0 w-[357px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="absolute h-[120px] left-[33px] top-[257px] w-[281px]" data-name="Testimonials">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[12px] top-[0.5px] tracking-[-0.3125px] w-[281px]">Working with Paul completely changed my approach to fitness. The programming was efficient, strategic, and fit perfectly into my demanding schedule. Gained 12 lbs of lean muscle while actually having more energy for work.</p>
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

function Testimonials1() {
  return (
    <div className="absolute bg-black h-[28px] left-[33px] top-[384px] w-[291px]" data-name="Testimonials1">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[12px] not-italic text-[14px] text-nowrap text-white top-[5px] tracking-[-0.1504px] whitespace-pre">+7 lbs of Muscle in 5 Months</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-[-0.5px] w-[106.578px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">Nick Anderson</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[20px] left-0 top-[24.5px] w-[170.297px]" data-name="Paragraph1">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Senior Computer Engineer</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[44px] left-[33px] top-[428px] w-[118.602px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[287.273px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-[240px] items-start left-0 overflow-clip shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[357px]" data-name="Container">
      <Image1 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="Card">
      <Container />
      <Testimonials />
      <Image />
      <Testimonials1 />
      <Container1 />
      <Container2 />
    </div>
  );
}