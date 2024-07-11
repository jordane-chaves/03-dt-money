import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;

    background-color: ${(props) => props.theme["gray-900"]};
    border: 0;
    border-radius: 6px;
    color: ${(props) => props.theme["gray-300"]};

    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    background: transparent;
    border: 1px solid ${(props) => props.theme["green-300"]};
    border-radius: 6px;

    color: ${(props) => props.theme["green-300"]};
    font-weight: 700;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    cursor: pointer;

    svg {
      height: 1.25rem;
      width: 1.25rem;
    }

    &:hover {
      background-color: ${(props) => props.theme["green-500"]};
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};

      transition: background-color 0.2s, color 0.2s, border-color 200ms;
    }
  }
`;
