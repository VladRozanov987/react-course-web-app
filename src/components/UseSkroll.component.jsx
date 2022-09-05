//Observer
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const UseSkroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  console.log(view);
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};

export default UseSkroll;
