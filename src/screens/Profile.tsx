import React from "react";
import styled, { css } from "styled-components";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import profile from "../images/profile.jpg";

const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
const ProfileImage = styled.img`
  width: 70%;
  border-radius: 50%;
`;
const Nametag = styled.span`
  margin-top: 20px;
  margin-left: 10px;
  font-size: 1.4rem;
  font-weight: 600;
`;
const Position = styled.span`
  margin-top: 5px;
  margin-left: 10px;
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
`;
const Anchor = styled.a`
  color: black;
  text-decoration: none;
`;
const Link = css`
  margin: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const Email = styled(MdEmail)`
  ${Link}
`;
const Github = styled(IoLogoGithub)`
  ${Link}
  margin-top: 6px;
  width: 26px;
  height: 26px;
`;
const LinkedIn = styled(IoLogoLinkedin)`
  ${Link}
`;
const Instagram = styled(IoLogoInstagram)`
  ${Link}
`;
const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const Biography = styled.div`
  padding-left: 20px;
  h3 {
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

const Profile = () => {
  return (
    <Container>
      <LeftPanel>
        <ProfileImage src={profile} />
        <Nametag>Paolo Chang</Nametag>
        <Position>Web &amp; Mobile Developer</Position>
        <Links>
          <Anchor href="mailto:chanhwan.chang@gmail.com">
            <Email />
          </Anchor>
          <Anchor
            href="https://github.com/PaoloChang"
            target="_blank"
            rel="noreferrer"
          >
            <Github href="https://github.com/PaoloChang" target="_blank" />
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/paolochang/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </Anchor>
          <Anchor
            href="https://www.instagram.com/j.paolo/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </Anchor>
        </Links>
      </LeftPanel>
      <RightPanel>
        <Biography>
          <h3>Biography</h3>
          Technical and highly motivated Front-End developer with 3+ years of
          experience developing open banking solutions in Financial technology
          industry. Skilled in designing, developing, and testing responsive web
          and mobile applications incorporating a range of technologies.
        </Biography>
      </RightPanel>
    </Container>
  );
};

export default Profile;
