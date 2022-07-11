import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
  a{
    text-decoration: none;
  }

  &:hover{

  }

`;

export const Description = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000077;
  color: #fff;
  font-size: 1.4rem;
  padding: 0.8rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

export const Thumb = styled.div`
  width: 100%;
  position: relative;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  &:hover{
    ${Description} {
      opacity: 1;
    }
  }
`;

export const Rating = styled.div`
  background-color: #00000077;
  color: #fff;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 0 5px 5px 0;
  position: absolute;
  top: 10px;
  left: 0;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 0.5rem;
  width: 100%;
  color: #fff;
  font-size: 1.4rem;

  h3{
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
