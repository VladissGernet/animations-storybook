import styled from 'styled-components';

const StyledButtons = styled.div`
${'' /* Костыль с margin, чтобы убрать белый фон*/}
  margin: -1rem;

  padding-top: 100px;
  background-color: #111111;

  min-height: 80vh;
`;

const StyledLine = styled.hr`
  border-color: #ffffff;
  border-style: solid;
`;

export { StyledButtons, StyledLine };
