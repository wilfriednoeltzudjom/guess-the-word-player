import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;

  > div {
    :not(:last-child) {
      margin-right: 1rem;
    }
  }
`;
