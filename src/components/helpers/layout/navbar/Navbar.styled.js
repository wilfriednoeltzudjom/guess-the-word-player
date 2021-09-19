import styled from 'styled-components';
import colors from '../../../../config/colors';

export default styled.nav`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;

  > section {
    :last-child {
      display: flex;
      justify-content: flex-end;

      > main {
        display: flex;
        align-items: center;

        > aside {
          margin-right: 1.5rem;
          text-align: end;

          > div {
            display: flex;
            align-items: center;
            color: ${colors.white};

            > span:not(:last-child) {
              margin-right: 0.25rem;
            }
          }

          > span {
            margin-top: 0.25rem;
          }
        }
      }
    }
  }
`;
