import image from "../../assets/images/image.png";

function Hero() {
  return (
    <div className="bg-[#28819c] flex-3 flex flex-col justify-evenly px-[10%] box-border">
      <div className="">
        <img src={image} className="w-120" />
      </div>
      <p className="text-[50px]/14 text-start text-white">
        We Make <br /> Sure it Works
        <p className="text-start text-[#FFFFFF] text-sm pt-4">
          Thinking outside the box is good, but don’t just build cool things
          “just because”.
          <br /> Build cool things that work. Pay attention to detail and
          fulfill the fundamental requirements before you go wild.
        </p>
      </p>
    </div>
  );
}

export default Hero;
