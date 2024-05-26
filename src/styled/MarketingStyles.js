import styled from "styled-components";

export const Marketing = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px 60px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const MarketingDivChild = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
`;

export const SubHeading = styled.h5`
  font-size: 24px;
  font-weight: 100px;
  margin-bottom: 0px;
  margin-top: 12px;
`;

export const OurService = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
`;

export const ServiceImage = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
