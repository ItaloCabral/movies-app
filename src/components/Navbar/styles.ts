import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #151515;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

  h2{
    margin: 0;
    width: 20%;
    text-align: center;
  }

  a{
    text-decoration: none;
    color: #6c798d;
    transition: color 0.2s;

    &:hover{
      color: #8c99ad;
    }
  }
`;

export const Search = styled.div`
  position: relative;
  width: 60%;
  height: 50%;

  input {
    width: 100%;
    height: 100%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #444;
    color: #fff;
    font-size: 1.6rem;
    border-radius: 5px;
    padding: 0 10px;
    outline: none;

    &:focus {
      background-color: #555;
    }

    &:focus ~ button {
      opacity: 1;
      color: #fff;
      background-color: #555;
    }
  }

  button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 30px;
    height: 100%;
    font-size: 1.8rem;
    background-color: #444;
    border: none;
    color: #666;
    border-radius: 5px;
    outline: none;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;

  .img-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    background:
      radial-gradient(#151515 63%, transparent 0),
      linear-gradient(45deg, #6c798d 0%, #8c99ad 50%, #acb9cd 100%);
    padding: 5px;
    border-radius: 50%;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
