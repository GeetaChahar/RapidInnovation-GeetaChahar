import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 50px;
  background: #333333;
`;

export const FooterColumn = styled.div`
  color: white;
  font-weight: 100;
  display: flex;
  flex-direction: column;
`;

export const FooterText = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 40px 60px;
  justify-content: evenly;
  margin: 0px 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Small = styled.small`
  margin-bottom: 10px;
`;

export const FooterGrey = styled.small`
  display: flex;
  background: #f0f0f0;
  padding: 4px 40px 40px;
  margin: 30px 0px;
  justify-content: end;
`;

export const LinkFooter = styled.small`
  background: white;
  padding: 10px 100px 30px 800px;
  display: flex;
  flex-direction: column;
  color: #00b4d8;
  text-decoration: underline;
`;
