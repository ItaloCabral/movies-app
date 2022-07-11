import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #fff;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  background-image: url("https://wallpaperaccess.com/full/4249199.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 24px auto;
  padding: 40px 20px;
  overflow-y: auto;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 20px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-items: center;
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;
