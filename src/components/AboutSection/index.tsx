import { HeadingSection } from "../Headings";

export type Props ={
  children: string;
}

const AboutSection = ({children}: Props) => {
  return (
    <HeadingSection bgColor="#421eaa">
      {children}
    </HeadingSection>
  )
}
export default AboutSection;