import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 6rem 0 6rem;

  > div {
    :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;
