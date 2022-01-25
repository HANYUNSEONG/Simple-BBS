import styled from "@emotion/styled";

interface IConfirmProps {
  title: string;
  content?: string;
  buttons: JSX.Element;
}

function Confirm({ title, content, buttons }: IConfirmProps) {
  return (
    <ConfirmWrapper>
      <h1>{title}</h1>
      {content && <p>{content}</p>}
      <div className="button_group">{buttons}</div>
    </ConfirmWrapper>
  );
}

const ConfirmWrapper = styled.div`
  min-width: 250px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  h1 {
    font-size: 1.2rem;
    text-align: center;
  }

  .button_group {
    display: flex;
    flex-wrap: wrap;
    row-gap: 0.5rem;

    button {
      width: 100%;
      &:hover {
        background-color: #e4e7f1;
      }
    }
  }
`;

export default Confirm;
