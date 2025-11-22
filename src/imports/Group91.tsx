import imgImage6 from "figma:asset/2f1a59bec263a5bed0a899a611870bb0cfe8aecc.png";
import imgScreenshot20251116At22954Pm1 from "figma:asset/d79774fa4b4857ec8a9b50ae9739c92014f9bdcd.png";

function Testimonials() {
  return (
    <div className="absolute h-[168px] left-[33px] top-[82px] w-[291px]" data-name="Testimonials">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[12px] top-[168px] tracking-[-0.3125px] w-[281px]">I grew leaps and bounds because of this program. Even when I fell off (more times than I should’ve), Coach Paul was always there for support and gave 100% into helping me.</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-black h-[28px] left-[33px] top-[377px] w-[291px]" data-name>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[12px] not-italic text-[14px] text-nowrap text-white top-[4.5px] tracking-[-0.1504px] whitespace-pre">-50bs of Fat in 13 Months</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Mikey Hart</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">VP of Sales, Arista Biotech</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[44px] relative shrink-0 w-[118.602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[118.602px]">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Testimonials1() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[33px] top-[419px] w-[217px]" data-name="Testimonials">
      <Container />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[33px] top-[82px]">
      <Testimonials />
      <div className="absolute left-[250px] size-[74px] top-[406px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <Component />
      <Testimonials1 />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
      <div className="absolute h-[240px] left-0 top-0 w-[356px]" data-name="Screenshot 2025-11-16 at 2.29.54 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[125.42%] left-[-0.02%] max-w-none top-[-25.42%] w-[100.33%]" src={imgScreenshot20251116At22954Pm1} />
        </div>
      </div>
    </div>
  );
}