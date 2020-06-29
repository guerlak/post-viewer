import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  /* width: 300px; */
  height: 110px;
  background-color: ${(props) => (props.isSelected ? "#a3a3a3" : "#d6d6d6")};
  margin-bottom: 5px;
  border: none;
  border-radius: 5px;

  strong {
    color: #1f1300;
  }
  button {
    display: flex;
    align-items: center;
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 10px;
  }
`;

export const Company = styled.div`
  background-color: #037171;
  width: 100%;
  color: #fff;
  padding: 5px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  padding: 10px;

  div {
    max-width: 150px;
  }

  strong {
    font-size: 17px;
  }

  p {
    font-size: 12px;
  }
  button {
    font-size: 12px;
    text-transform: uppercase;
    transition: 0.2s;
    background: none;

    svg {
      color: #036363;
      transition: 0.5s;
    }
    svg:hover {
      opacity: 0.7;
    }
  }
`;
