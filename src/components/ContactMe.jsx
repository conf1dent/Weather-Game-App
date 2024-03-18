import styled from "styled-components";

const ContactInfo = styled.div`
  width: 100%;
  min-height: 400px;
  height: 80vh;
  ${"" /* background-color: lightblue; */}
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const ContactIcon = styled.a`
  width: 50px;
  height: 50px;
  ${"" /* background-color: white; */}
  ${"" /* display: inline-block; */}
  background-size: contain;
  ${"" /* background-repeat: no-repeat; */}
  ${"" /* background-position: center; */}
`;

function ContactMe() {
  return (
    <ContactInfo>
      <ContactIcon
        href="mailto:bbekmamatov1991@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        // src="https://www.svgrepo.com/show/485253/email-opened.svg"
        style={{
          backgroundImage:
            "url('https://www.svgrepo.com/show/485253/email-opened.svg')",
        }}
        aria-label="Email"
      />
      <ContactIcon
        href="https://github.com/conf1dent"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundImage:
            "url('https://www.svgrepo.com/show/331724/github-code-source.svg')",
        }}
        aria-label="Github"
      />
      <ContactIcon
        href="https://linkedin.com/in/bekmamatov"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundImage:
            "url('https://www.svgrepo.com/show/176736/linkedin-social-media.svg')",
        }}
        aria-label="Linkedin"
      />
      <ContactIcon
        href="https://discordapp.com/users/637768214356688907"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundImage:
            "url('https://www.svgrepo.com/show/331368/discord-v2.svg')",
        }}
        aria-label="Discord"
      />
    </ContactInfo>
  );
}

export default ContactMe;
