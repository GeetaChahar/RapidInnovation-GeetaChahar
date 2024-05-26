import styled from "styled-components";

export const HeroSection = styled.div`
  background: rgb(10, 0, 150);
  background: linear-gradient(
    100deg,
    rgba(10, 0, 150, 1) 0%,
    rgba(175, 10, 253, 1) 100%
  );
  margin: 0px;
  padding-bottom: 50px;

  @media (max-width: 992px) {
    padding-bottom: 34px;
  }
`;

export const MidSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 20px;
  color: white;

  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 50px;
`;

export const Heading = styled.h4`
  font-size: 50px;
  font-weight: 400;
  margin: 0px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 200;
  line-height: 30px;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  width: fit-content;
  background: #ffe761;
  border: none;
  border-radius: 50px;
  padding: 12px 20px;
  margin-top: 12px;
`;
