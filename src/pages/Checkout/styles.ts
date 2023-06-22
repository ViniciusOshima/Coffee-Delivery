import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 2.5rem auto;

  display: flex;
  gap: 32px;
  justify-content: center;
`

export const CompleteYourRequest = styled.div`
  width: 40rem;
`

export const CoffeesSelected = styled.div`
  width: 28rem;
`

export const FormSection = styled.div`
  height: 23.25rem;

  border-radius: 6px;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['base-card']};
`

export const FormDescription = styled.div`
  display: flex;
  gap: 8px;

  color: ${(props) => props.theme['yellow-dark']};

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
    font-weight: 400;
  }
`

export const FormContainer = styled.div`
  display: flex;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding-top: 2rem;

    input {
      height: 2.625rem;

      padding: 0.75rem;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme['base-button']};

      background-color: ${(props) => props.theme['base-input']};

      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;

      &::placeholder {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`

export const CEPInputContainer = styled.input`
  width: 12.5rem;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const RuaInputInputContainer = styled.input`
  width: 35rem;
`

export const NumeroInputContainer = styled.input`
  width: 12.5rem;
`

export const ComplementoInputContainer = styled.input`
  width: 21.75rem;
`

export const BairroInputContainer = styled.input`
  width: 12.5rem;
`

export const CidadeInputContainer = styled.input`
  width: 17.25rem;
`

export const UFInputContainer = styled.input`
  width: 3.75rem;
`

export const MoreThanOneInputContainer = styled.div`
  display: flex;
  gap: 12px;
`
