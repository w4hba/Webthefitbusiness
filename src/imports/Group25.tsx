import svgPaths from "./svg-d62yy2vyy8";
import imgF99Ec7Be1Ff9473989B14Dc5Da09D4Eb2 from "figma:asset/c6aff2bc80678ba2a8cc3ac28ea814ab1e19c246.png";

function Heading() {
  return <div className="absolute h-[24px] left-0 top-0 w-[896px]" data-name="Heading 1" />;
}

function Paragraph() {
  return <div className="absolute h-[56px] left-[112px] top-[48px] w-[672px]" data-name="Paragraph" />;
}

function Container() {
  return (
    <div className="absolute h-[104px] left-[152px] top-[389px] w-[896px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[17px] size-[16px] top-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1e6eff00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p5baad20} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[24px] left-[41px] top-[9px] w-[179.359px]" data-name="Text">
      <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] leading-[24px] left-[90px] not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-0.5px] tracking-[1px] translate-x-[-50%] whitespace-pre">BE THE FIRST TO KNOW</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[42px] left-[280.32px] rounded-[1.67772e+07px] top-0 w-[237.359px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Icon />
      <Text />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[24px] left-0 top-[58px] w-[798px]" data-name="Heading 2">
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] leading-[24px] left-[398.98px] not-italic text-[16px] text-center text-nowrap text-white top-[-0.5px] tracking-[0.5px] translate-x-[-50%] whitespace-pre">Get Early Access</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-0 top-[94px] w-[798px]" data-name="Paragraph">
      <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] leading-[24px] left-[399.94px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-[-0.5px] tracking-[0.5px] translate-x-[-50%] whitespace-pre">Join our exclusive list and be the first to shop when we launch. Plus, get 20% off your first order.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[118px] left-[49px] top-[49px] w-[798px]" data-name="Container">
      <Container1 />
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function EmailInput() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.1)] grow h-[50px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.4)] text-nowrap tracking-[-0.3125px] whitespace-pre">Enter your email</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[50px] relative rounded-[10px] shrink-0 w-[134.383px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50px] relative w-[134.383px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[32px] not-italic text-[16px] text-black text-nowrap top-[12.5px] tracking-[-0.3125px] whitespace-pre">Notify Me</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[12px] h-[50px] items-start relative shrink-0 w-full" data-name="Container">
      <EmailInput />
      <Button />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[224.9px] not-italic text-[14px] text-[rgba(255,255,255,0.4)] text-center text-nowrap top-[0.5px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[82px] items-start left-[224px] top-[199px] w-[448px]" data-name="Form">
      <Container3 />
      <Paragraph2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] h-[330px] left-[152px] rounded-[16px] top-[558px] w-[896px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container2 />
      <Form />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] leading-[24px] left-[448.25px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-[-0.5px] tracking-[1px] translate-x-[-50%] whitespace-pre">Follow us for updates and new releases</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_4_648)" id="Icon">
          <path d={svgPaths.p4b98700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p29b16f80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_4_648">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[48px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p153fcd80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[48px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1bcdee00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 7.5H1.66667V17.5H5V7.5Z" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25677470} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[48px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[10.938px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 20">
        <g id="Icon">
          <path d={svgPaths.p3ca3ff00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[48px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute contents inset-[5.83%_4.17%_2.92%_23.85%]" data-name="Icon">
      <div className="absolute inset-[5.83%_4.17%_2.92%_23.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
          <path d={svgPaths.p19f70a80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon6 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[48px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[88px] items-start left-[152px] top-[911px] w-[896px]" data-name="Container">
      <Paragraph3 />
      <Container5 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[514px] top-[219px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6592289805412292)+(var(--transform-inner-height)*0.7519428133964539)))] items-center justify-center left-[524.26px] top-[229.26px] w-[calc(1px*((var(--transform-inner-height)*0.6592283844947815)+(var(--transform-inner-width)*0.7519422173500061)))]" style={{ "--transform-inner-width": "136.734375", "--transform-inner-height": "140.140625" } as React.CSSProperties}>
        <div className="flex-none rotate-[318.759deg]">
          <div className="bg-white h-[140.156px] w-[136.737px]" />
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6546506881713867)+(var(--transform-inner-height)*0.755932092666626)))] items-center justify-center left-[514px] top-[219px] w-[calc(1px*((var(--transform-inner-height)*0.654650092124939)+(var(--transform-inner-width)*0.7559314966201782)))]" style={{ "--transform-inner-width": "148.390625", "--transform-inner-height": "157.21875" } as React.CSSProperties}>
        <div className="flex-none rotate-[319.107deg]">
          <div className="h-[157.228px] relative w-[148.394px]" data-name="F99EC7BE-1FF9-4739-89B1-4DC5DA09D4EB 2">
            <div className="absolute inset-0 mix-blend-darken overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[385.57%] left-[-106.62%] max-w-none top-[-163.11%] w-[391.64%]" src={imgF99Ec7Be1Ff9473989B14Dc5Da09D4Eb2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return <div className="absolute h-[24px] left-[529px] top-[207px] w-[165.617px]" data-name="Text" />;
}

function FitBusiness() {
  return (
    <div className="absolute bg-black h-[1358px] left-0 top-0 w-[1204px]" data-name="FitBusiness">
      <Container />
      <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] leading-[28px] left-[622px] not-italic text-[20px] text-[rgba(255,255,255,0.6)] text-center top-[440px] tracking-[0.1px] translate-x-[-50%] w-[594px]">
        Quality and Performance.
        <br aria-hidden="true" />
        {` Our exclusive collection is dropping soon.`}
      </p>
      <Container4 />
      <Container6 />
      <Group />
      <Text1 />
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] leading-[24px] left-[529px] not-italic text-[20px] text-[rgba(255,255,255,0.8)] text-nowrap top-[231px] tracking-[1px] whitespace-pre">LAUNCHING SOON</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <FitBusiness />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group1 />
    </div>
  );
}

export default function Group3() {
  return (
    <div className="relative size-full">
      <Group2 />
    </div>
  );
}