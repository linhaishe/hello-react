import React from 'react';
import { useAuth } from '../context/auth-context';

const apiUrl = process.env.REACT_APP_API_URL;

function RegisterScreen() {
  // const login = (param: { username: string; password: string }) => {
  //   fetch(`${apiUrl}/login`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(param),
  //   }).then(async (res) => {
  //     if (res.ok) {
  //       console.log(1);
  //     }
  //   });
  // };
  const { register, user } = useAuth();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    register({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>
          用户名
          <input type='text' id='username' />
        </label>
      </div>
      <div>
        <label htmlFor='password'>
          密码
          <input type='text' id='username' />
        </label>
      </div>
      <button type='submit'>注册</button>
    </form>
  );
}

export default RegisterScreen;
