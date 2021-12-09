import {
  Facebook,
  Instagram,
  Telegram,
  CalendarTodayRounded,
  PhoneRounded,
  EmailRounded,
} from "@material-ui/icons";
import styled from "styled-components";
import { device } from "../responsive";

const FooterBlock = styled.footer`
  margin-top: 40px;
  position: relative;
  width: 100%;
  height: auto;
  padding: 26px 70px 20px 70px;
  background-color: #5787df;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${device.laptopS} {
    padding: 40px 40px 20px 40px;
  }

  @media ${device.mobileM} {
    padding: 30px 24px 14px 28px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 auto;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  margin-right: 30px;

  @media ${device.tablet} {
    margin-right: 0;
    margin-bottom: 30px;
    width: 100%;
  }

  &.about-us {
    width: 40%;

    @media ${device.tablet} {
      width: 100%;
    }
  }
  &.contacts {
    width: 30%;

    @media ${device.tablet} {
      width: 100%;
    }

    margin-right: 0 !important;
  }
`;

const Title = styled.h3`
  font-family: "Comfortaa", cursive;
  position: relative;
  color: #fff;
  font-weight: 500;
  margin-bottom: 18px;
  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60px;
    height: 2px;
    background: rgb(221, 218, 218);
    border-radius: 40px;
  }
`;

const Paragraph = styled.p`
  color: rgb(221, 218, 218);
  font-family: "Comfortaa", cursive;
`;

const Socials = styled.ul`
  margin-top: 20px;
  display: flex;
  margin-left: -40px;
`;

const SocialsLink = styled.a`
  font-family: "Comfortaa", cursive;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  text-decoration: none;
  border-radius: 50%;
  box-shadow: inset -1px 1px 2px rgba(0, 0, 0, 0.2),
    2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;

  &:hover {
    transform: translateY(-14px);
    box-shadow: inset -1px 1px 2px rgba(0, 0, 0, 0.2),
      2px 24px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
  }
  &::before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    border-radius: 50%;
    transition: all 0.5s;
  }

  &:hover .icon {
    color: #fff;
    transition: all 0.5s;
  }

  .icon {
    color: #517ee1;
    font-size: 28px;
    position: relative;
    z-index: 1;
    transition: all 0.5s;
  }
`;

const SocialsList = styled.li`
  list-style: none;

  &:nth-child(1):hover ${SocialsLink}::before {
    background-color: #1877f2;
    transition: 0.8s;
  }
  &:nth-child(2):hover ${SocialsLink}::before {
    background-color: #c32aa3;
    transition: 0.8s;
  }

  &:nth-child(3):hover ${SocialsLink}::before {
    background-color: #1da1f2;
    transition: 0.8s;
  }
`;

const Contacts = styled.ul`
  position: relative;
`;

const ContactsSpan = styled.span`
  color: rgb(221, 218, 218);
  font-family: "Comfortaa", cursive;
`;

const ContactsList = styled.li`
  display: flex;
  margin-bottom: 16px;
  margin-left: -40px;

  ${ContactsSpan}:nth-child(1) {
    color: #fff;
    font-size: 18px;
    margin-right: 10px;
    transition: color 0.3s;
  }

  ${ContactsSpan}:nth-child(1):hover {
    color: rgb(221, 218, 218);
  }
`;

const ContactsLink = styled.a`
  color: rgb(221, 218, 218);
  text-decoration: none;
  transition: color 0.3s;
  font-family: "Comfortaa", cursive;

  &:hover {
    color: #fff;
  }
`;

const Copyright = styled.div`
  width: 100%;
  color: rgb(221, 218, 218);
  text-align: center;
  font-size: 14px;

  @media ${device.tablet} {
    font-size: 13px;
  }
`;

const CopyrightLink = styled.a`
  color: rgb(221, 218, 218);
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: #b8b8b8;
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <FooterContainer>
        <FooterSection className="about-us" id="about-us">
          <Title>Про нас:</Title>
          <Paragraph>
            YummyBebra - це інтернет-магазин косметики та засобів для догляду.
            Ми щодня вдосконалюємо наш сервіс, щоб зробити вас щасливішими!
          </Paragraph>
          <Socials>
            <SocialsList>
              <SocialsLink href="https://www.facebook.com/profile.php?id=100017238672747">
                <Facebook className="icon" />
              </SocialsLink>
            </SocialsList>
            <SocialsList>
              <SocialsLink href="https://instagram.com/_janna.shop_?igshid=7pqidfqd5k04">
                <Instagram className="icon" />
              </SocialsLink>
            </SocialsList>
            <SocialsList>
              <SocialsLink href="https://t.me/Yana_tvardovska">
                <Telegram className="icon" />
              </SocialsLink>
            </SocialsList>
          </Socials>
        </FooterSection>
        <FooterSection className="contacts" id="contacts">
          <Title>Контакти:</Title>
          <Contacts>
            <ContactsList>
              <ContactsSpan>
                <CalendarTodayRounded />
              </ContactsSpan>
              <ContactsSpan>
                Пн-Пт - 9:00 - 20:00
                <br />
                Сб-Нд - 11:00 - 19:00
              </ContactsSpan>
            </ContactsList>
            <ContactsList>
              <ContactsSpan>
                <PhoneRounded />
              </ContactsSpan>
              <Paragraph>
                <ContactsLink href="tel:+380689364508">
                  +380662196227
                </ContactsLink>
                <br />
                <ContactsLink href="tel:+380662196227">
                  +380971359124
                </ContactsLink>
              </Paragraph>
            </ContactsList>
            <ContactsList>
              <ContactsSpan>
                <EmailRounded />
              </ContactsSpan>
              <Paragraph>
                <ContactsLink href="mailto:enootegg@gmail.com">
                  enootegg@gmail.com
                </ContactsLink>
              </Paragraph>
            </ContactsList>
          </Contacts>
        </FooterSection>
      </FooterContainer>
      <Copyright>
        <Paragraph>© YummyBebra 2021</Paragraph>
        <span>
          powered by{" "}
          <CopyrightLink href="https://github.com/enootegg" target="_blank">
            enootegg
          </CopyrightLink>
        </span>
      </Copyright>
    </FooterBlock>
  );
};

export default Footer;
