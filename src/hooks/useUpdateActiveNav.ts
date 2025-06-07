import { updateActiveNav } from "@/lib/slices/rootSlice";
import { useMotionValueEvent, useScroll } from "motion/react";
import { RefObject } from "react";
import { useDispatch } from "react-redux";

export default function useUpdateActiveNav(ref: RefObject<HTMLElement>) {
  const dispatch = useDispatch();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (ref.current) {
      const viewportOffset = ref.current.getBoundingClientRect();

      if (viewportOffset.top <= 10 && viewportOffset.bottom >= 0) {
        console.log(
          "🚀 ~ useMotionValueEvent ~ ref.current.id:",
          ref.current.id
        );
        dispatch(updateActiveNav(ref.current.id));
      }
    }
  });

  return;
}
