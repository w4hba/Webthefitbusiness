import imgImage from "figma:asset/fc33736fbedeb947dec4669a38dbb1f43aa77ac8.png";
import imgImage1 from "figma:asset/194697a0554e25ec9c2cf91d4b8de4e9c1600416.png";

function Image() {
  return (
    <div className="absolute h-[789px] left-0 top-0 w-[590px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[937.328px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[789px] items-start left-[590px] overflow-clip pb-0 top-0 w-[620px]" data-name="Container">
      <Image1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute font-['DM_Serif_Text:Regular',sans-serif] h-[144px] leading-[72px] left-[618px] not-italic text-[70px] text-nowrap text-right text-white top-[439px] tracking-[-1.677px] w-[575px] whitespace-pre" data-name="Paragraph">
      <p className="absolute left-[575.9px] top-0 translate-x-[-100%]">BRING YOUR</p>
      <p className="absolute left-[575.2px] top-[72px] translate-x-[-100%]">THUNDER.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[56px] left-[816px] top-[584px] w-[377px]" data-name="Paragraph">
      <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] leading-[28px] left-[377.66px] not-italic text-[20px] text-[rgba(255,255,255,0.9)] text-right top-[0.5px] tracking-[-0.4492px] translate-x-[-100%] w-[371px]">Join the Fit Team of over 50 High Performers and get results that last for life.</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[111px] left-[37px] top-[587px] w-[548px]" data-name="Paragraph">
      <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-[rgba(255,255,255,0.9)] top-[0.5px] tracking-[-0.4492px] w-[528px]">Experience elite fitness coaching tailored to your body, activity, training, and schedule.</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[126px] not-italic text-[18px] text-black text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Free High Performance Guide</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[58px] items-start left-[39px] pb-0 pl-[13.766px] pr-[14.766px] pt-[17px] rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[648px] w-[280px]" data-name="Button1">
      <Paragraph3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[36px] top-0">
      <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] leading-[72px] left-[36px] not-italic text-[70px] text-nowrap text-white top-[15px] tracking-[-1.677px] whitespace-pre">
        COME OUT WITH
        <br aria-hidden="true" />
        {`YOUR BEST `}
        <br aria-hidden="true" />
        RESULTS.
      </p>
      <Container />
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Button />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Image />
      <Group />
    </div>
  );
}