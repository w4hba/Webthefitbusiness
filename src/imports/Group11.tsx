import svgPaths from "./svg-agp9e0pyo4";

function Heading() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[425.195px]" data-name="Heading 3">
      <p className="absolute font-['DM_Serif_Display:Regular',sans-serif] leading-[32px] left-0 not-italic text-[24px] text-nowrap text-white top-0 tracking-[-0.5297px] whitespace-pre">THE FIT BUSINESS</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[72px] left-0 top-[48px] w-[384px]" data-name="Paragraph">
      <p className="absolute font-['DM_Serif_Text:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[-0.5px] tracking-[-0.3125px] w-[384px]">Premium online fitness coaching and supplements for ambitious professionals who demand results without sacrificing their lifestyle.</p>
    </div>
  );
}

function Icon() {
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

function Link() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] box-border content-stretch flex items-center justify-center left-[189px] p-px rounded-[1.67772e+07px] size-[48px] top-[136px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Icon />
    </div>
  );
}

function Icon1() {
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

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] box-border content-stretch flex items-center justify-center left-[249px] p-px rounded-[1.67772e+07px] size-[48px] top-[136px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Icon3 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[184px] left-0 top-0 w-[425.195px]" data-name="Container">
      <Heading />
      <Paragraph />
      <Link />
      <Link1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[188.602px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[0.0875px] whitespace-pre">Legal</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[4.5px] w-[89.391px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[188.602px]" data-name="List Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[4.5px] w-[108.492px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Terms of Service</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[24px] left-0 top-[32px] w-[188.602px]" data-name="List Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[16.5px] left-0 top-[4.5px] w-[88.32px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Refund Policy</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[24px] left-0 top-[64px] w-[188.602px]" data-name="List Item">
      <Link4 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute h-[88px] left-0 top-[34px] w-[188.602px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[16.5px] left-[0.2px] top-[140px] w-[99.969px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Careers</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[106px]" data-name="Heading 5">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Shop</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[116px] items-start left-[-148px] top-0 w-[99px]" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[184px] left-0 top-0 w-[188.602px]" data-name="Container">
      <Paragraph1 />
      <List />
      <Link5 />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[184px] left-[947px] top-0 w-[188.602px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[77.961px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">All Products</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[76.203px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Best Sellers</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[80.969px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">New Arrivals</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Button2 />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[76px] items-start left-[799px] top-[39px] w-[123px]" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[184px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container3 />
      <List1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20px] left-0 top-[17px] w-[260.195px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">© 2025 The Fit Business. All rights reserved.</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[20px] left-[856.8px] top-[17px] w-[279.203px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[130.2px] not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Built to transform lives.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-black box-border content-stretch flex flex-col gap-[48px] h-[381px] items-start left-0 pb-0 pt-[64px] px-[32px] top-0 w-[1204px]" data-name="Footer">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Icon4() {
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

function Link6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] box-border content-stretch flex h-[48px] items-center justify-center left-[33.11px] p-px rounded-[1.67772e+07px] top-[199px] w-[48.16px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Icon4 />
    </div>
  );
}

function Icon5() {
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

function Link7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] box-border content-stretch flex h-[48px] items-center justify-center left-[97.32px] p-px rounded-[1.67772e+07px] top-[199px] w-[48.16px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Icon5 />
    </div>
  );
}

function Icon6() {
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

function Link8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] box-border content-stretch flex h-[48px] items-center justify-center left-[161.54px] p-px rounded-[1.67772e+07px] top-[199px] w-[48.16px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Icon6 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Footer />
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}