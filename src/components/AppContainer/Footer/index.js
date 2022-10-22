import { FooterWrapper, Mail, Socials } from "./styled";
import { Caption } from "../../common/Caption";
import { Summarization } from "../../common/Summarization";
import { ReactComponent as Github } from "../../common/images/github.svg";
import { ReactComponent as LinkedIN } from "../../common/images/LinkedIN.svg";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Caption>Let's talk!</Caption>
      <Mail href="mailto:grzegorz.golos@gmail.com">grzegorz.golos@gmail.com</Mail>
      <Summarization footerText>
        I'd like to start working as Junior Frontend Developer. There are some samples above and I hope it can help in
        convincing you to contact me.
      </Summarization>
      <Socials href="https://github.com/golosgit/"><Github /></Socials>
      <Socials href="https://www.linkedin.com/in/grzegorzgolos/"><LinkedIN /></Socials>
    </FooterWrapper>
  );
};