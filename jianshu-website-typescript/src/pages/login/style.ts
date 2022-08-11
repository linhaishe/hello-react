import styled from 'styled-components';
// ff
export const LoginWrapper = styled.div`
  z-index: 0;
  width: 100%;
  height: 100vh;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  z-index: 1;
  width: 450px;
  height: 450px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 225px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin-bottom: 10px;
`;

export const Button = styled.div`
  width: 260px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: #3194d0;
  border-radius: 15px;
  margin: 10px;
  text-align: center;
`;
