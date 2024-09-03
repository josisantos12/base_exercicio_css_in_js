import styled from 'styled-components';

const header = styled.header`
  background-color: ${props => props.theme.corSecundaria};
  color: ${props => props.theme.corPrincipal};
  text-align: center;
  padding: 24px 0;
`;

function cabecalho(){
  return <header>
  <h1>meu cabecalho</h1>
</header>
;
}
export default cabecalho