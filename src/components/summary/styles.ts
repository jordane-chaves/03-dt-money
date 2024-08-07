import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin: 0 auto;
  margin-top: -5rem;
  padding: 0 1.5rem;

  max-width: 1120px;
  width: 100%;
`

interface SummaryCardProps {
  $variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 6px;

  padding: 2rem;

  header {
    color: ${(props) => props.theme['gray-300']};
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      height: 2rem;
      width: 2rem;
    }
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.$variant === 'green' &&
    css`
      background-color: ${props.theme['green-700']};
    `}
`
