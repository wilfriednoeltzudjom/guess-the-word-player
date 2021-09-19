import styled from 'styled-components';

export default styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    :not(:last-child) {
      margin-bottom: 4rem;
    }
  }
`;
