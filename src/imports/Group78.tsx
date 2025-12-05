import imgImage6 from "../assets/2f1a59bec263a5bed0a899a611870bb0cfe8aecc.png?url";
import imgScreenshot20251116At22752Pm1 from "../assets/09dd02a6f603db995ebebe3a7ad0d906c14f5915.png?url";

function Testimonials() {
  return (
    <div className="absolute h-[168px] left-[33px] top-[89px] w-[291px]" data-name="Testimonials">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[12px] top-[168px] tracking-[-0.3125px] w-[281px]">My life completely took a 180. I used to struggle with sleep, energy, and having to keep up with my work due to my poor health. Now, I wake up ready to tackle the day with all my energy back,</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute bg-black h-[28px] left-[33px] top-[384px] w-[291px]" data-name>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[12px] not-italic text-[14px] text-nowrap text-white top-[4.5px] tracking-[-0.1504px] whitespace-pre">+10 lbs of Muscle in 8 Months</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Rick Samson</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">CEO of Sanchez Group Financial</p>
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
    <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[33px] top-[426px] w-[217px]" data-name="Testimonials">
      <Container />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Testimonials />
      <div className="absolute left-[250px] size-[74px] top-[413px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <Component />
      <Testimonials1 />
      <div className="absolute h-[244px] left-0 top-0 w-[357px]" data-name="Screenshot 2025-11-16 at 2.27.52 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.27%] left-0 max-w-none top-[-38.19%] w-full" src={imgScreenshot20251116At22752Pm1} />
        </div>
      </div>
    </div>
  );
}