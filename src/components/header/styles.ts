import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 0 1.5rem;

  max-width: 1120px;
  width: 100%;
`;

export const NewTransactionButton = styled.button`
  background-color: ${(props) => props.theme["green-500"]};
  border: 0;
  border-radius: 6px;

  color: ${(props) => props.theme.white};
  font-weight: 700;

  height: 50px;
  padding: 0 1.25rem;

  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme["green-700"]};
    transition: background-color 200ms;
  }
`;
