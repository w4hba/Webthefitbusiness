import imgImage6 from "figma:asset/2f1a59bec263a5bed0a899a611870bb0cfe8aecc.png";
import imgScreenshot20251116At22902Pm1 from "figma:asset/0b809e3ab0aa9f59a819972e1143b5ebd4a52bb3.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute left-[250px] size-[74px] top-[413px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="absolute h-[257px] left-0 top-0 w-[357px]" data-name="Screenshot 2025-11-16 at 2.29.02 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.84%] left-[-0.03%] max-w-none top-[-5.84%] w-[100.07%]" src={imgScreenshot20251116At22902Pm1} />
        </div>
      </div>
    </div>
  );
}