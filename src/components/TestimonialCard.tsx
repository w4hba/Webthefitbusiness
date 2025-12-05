import imgLogo from "../assets/2f1a59bec263a5bed0a899a611870bb0cfe8aecc.png?url";

interface TestimonialCardProps {
  name: string;
  occupation: string;
  testimonial: string;
  result: string;
  image: string;
}

export default function TestimonialCard({ name, occupation, testimonial, result, image }: TestimonialCardProps) {
  return (
    <div className="bg-white relative rounded-[14px] h-[488px] w-[357px] flex-shrink-0">
      {/* Border */}
      <div className="absolute h-[488px] left-0 rounded-[14px] top-0 w-[357px]">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      </div>

      {/* Image Container */}
      <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-[240px] items-start left-0 overflow-clip shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[357px] rounded-t-[14px]">
        <div className="relative shrink-0 w-full h-full">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={image} />
        </div>
      </div>

      {/* Testimonial Text */}
      <div className="absolute left-[33px] top-[257px] w-[281px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#364153] text-[12px] tracking-[-0.3125px]">
          {testimonial}
        </p>
      </div>

      {/* Result Banner */}
      <div className="absolute bg-black h-[28px] left-[33px] top-[384px] w-[291px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[12px] not-italic text-[14px] text-nowrap text-white top-[5px] tracking-[-0.1504px] whitespace-pre">
          {result}
        </p>
      </div>

      {/* Name and Occupation */}
      <div className="absolute h-[44px] left-[33px] top-[428px]">
        <div className="absolute h-[24px] left-0 top-[-0.5px]">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-1px] tracking-[-0.3125px] whitespace-pre">
            {name}
          </p>
        </div>
        <div className="absolute h-[20px] left-0 top-[24.5px]">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">
            {occupation}
          </p>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute left-[250px] size-[74px] top-[413px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}
