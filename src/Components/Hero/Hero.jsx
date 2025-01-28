import image from "../../assets/images/image.png";

function Hero() {
  return (
    <div className="bg-[#28819c] flex-3">
      <div className="flex justify-center ">
        <img src={image} className="h-80" />
      </div>
      <p className="text-[80px]/18 text-start line-h text-white">
        We Make <br /> Sure it Works
      </p>
      <p className="text-start">
        Thinking outside the box is good, but don’t just build cool things “just
        because”. Build cool things that work. Pay attention to detail and
        fulfill the fundamental requirements before you go wild.
      </p>
    </div>
  );
}

export default Hero;
