import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.75);

  position: fixed;
  inset: 0;

  height: 100dvh;
  width: 100vw;
`;

export const Content = styled(Dialog.Content)`
  background-color: ${(props) => props.theme["gray-800"]};
  border-radius: 6px;

  min-width: 32rem;
  padding: 2.5rem 3rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;

    input {
      background-color: ${(props) => props.theme["gray-900"]};
      border: 0;
      border-radius: 6px;
      color: ${(props) => props.theme["gray-300"]};

      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      background-color: ${(props) => props.theme["green-500"]};
      border: 0;
      border-radius: 6px;

      color: ${(props) => props.theme.white};
      font-weight: 700;

      height: 58px;

      margin-top: 1.5rem;
      padding: 0 1.25rem;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme["green-700"]};
        transition: background-color 200ms;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  background: transparent;
  border: 0;
  border-radius: 2px;
  color: ${(props) => props.theme["gray-500"]};

  line-height: 0;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  cursor: pointer;

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  $variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background-color: ${(props) => props.theme["gray-700"]};
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme["gray-300"]};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem;
  cursor: pointer;

  svg {
    color: ${(props) =>
      props.$variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};

    height: 1.5rem;
    width: 1.5rem;
  }

  &[data-state="unchecked"]:hover {
    &:hover {
      background-color: ${(props) => props.theme["gray-600"]};
      transition: background-color 200ms;
    }
  }

  &[data-state="checked"] {
    background-color: ${(props) =>
      props.$variant === "income"
        ? props.theme["green-500"]
        : props.theme["red-500"]};

    color: ${(props) => props.theme.white};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`;
