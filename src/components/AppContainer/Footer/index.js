import { Caption } from "../../common/Caption/styled";
import { FooterText, FooterWrapper, Mail, Socials } from "./styled";
import { ReactComponent as Github } from "../../common/images/github.svg";
import { ReactComponent as LinkedIN } from "../../common/images/LinkedIN.svg";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Caption>Let's talk!</Caption>
      <Mail href="mailto:grzegorz.golos@gmail.com">grzegorz.golos@gmail.com</Mail>
      <FooterText>
        I'd like to start working as Junior Frontend Developer. There are some samples above and I hope it can help in
        convincing you to contact me.
      </FooterText>
      <Socials href="https://github.com/golosgit/"><Github /></Socials>
      <Socials href="https://www.linkedin.com/in/grzegorzgolos/"><LinkedIN /></Socials>
    </FooterWrapper>
  );
};