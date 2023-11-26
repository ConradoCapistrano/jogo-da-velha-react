import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to right, #00bcd4, #4caf50, #ffff00);
  background-size: 200% 100%;
`;
export const Area = styled.div`
    width: 300px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
    border: 1px solid #fff;
`;

export const Info = styled.div`
    width: 300px;
    display: flex;
    margin-top: 20px;
    border: 1px dotted #FFF;
    padding: 10px;
`;
export const Item = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: bold;
  color: #FFF;
  cursor: pointer;
  border: 2px solid #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
export const InfoItem = styled.div`
    flex: 1;
    text-align: center;
    color: #FFF;
    margin-bottom: 10px;
    font-size: 20px;
`;
export const Title = styled.h1`
    color: #FFF;
    margin: 10px 0;
`;
export const Button = styled.button`
    border: 1px solid #fff;
    background-color: rgba(0, 0, 0, 0.2);
    color: #FFF;
    padding: 10px;
    margin-top: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    background-color: #008000;
    border-radius: 10px;
`;