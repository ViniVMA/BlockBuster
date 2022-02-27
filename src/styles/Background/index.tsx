import { AnimatedBackground } from "./background.style";

interface AnimatedBackgroundProps {
  children: string;
}

export const Background: React.FC = ({ children }) => {
  return (
    <AnimatedBackground className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </AnimatedBackground>
  );
};
