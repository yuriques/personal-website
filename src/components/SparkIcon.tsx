import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";

interface SparkIconProps {
  className?: string;
}

gsap.registerPlugin(useGSAP, DrawSVGPlugin);

const SparkIcon = ({ className = "" }: SparkIconProps) => {
  useGSAP(() => {
    const rays = gsap.utils.toArray(".sparkray");

    const points = rays.map((el) => {
      const b = el.getBBox();
      return { el, x: b.x + b.width / 2, y: b.y + b.height / 2 };
    });

    const cx = points.reduce((sum, p) => sum + p.x, 0) / points.length;
    const cy = points.reduce((sum, p) => sum + p.y, 0) / points.length;

    const ordered = points
      .sort(
        (a, b) =>
          Math.atan2(a.y - cy, a.x - cx) - Math.atan2(b.y - cy, b.x - cx),
      )
      .map((p) => p.el);

    const timeline = gsap.timeline();

    timeline.from(
      ordered,
      {
        duration: 0.2,
        stagger: 0.04,
        drawSVG: 0,
        delay: 2.5,
        ease: "power2.out",
      },
      0,
    );

    timeline.to(
      ordered,
      {
        duration: 0.5,
        opacity: 0,
        scale: 2.5,
        stagger: 0.04,
        delay: 2.5,
        ease: "back.in",
      },
      0.1,
    );
  });

  return (
    <svg
      className={`spark-svg ${className}`.trim()}
      width="120"
      height="120"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        className="sparkray"
        d="M14 2L14 8"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        className="sparkray"
        d="M2 14L8 14"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        className="sparkray"
        d="M14 20L14 26"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        className="sparkray"
        d="M20 14L26 14"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        className="sparkray"
        d="M5.5 5.5L9.8 9.8"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        className="sparkray"
        d="M18.2 18.2L22.5 22.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        className="sparkray"
        d="M5.5 22.5L9.8 18.2"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        className="sparkray"
        d="M18.2 9.8L22.5 5.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SparkIcon;
