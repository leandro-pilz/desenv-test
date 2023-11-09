import "./Auth.css";

//Router
import { Link } from "react-router-dom";

// Hooks
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Interface
import { IUser } from "../../interfaces/Users";

type Props = {};

const Auth = (props: Props) => {
  const [name, setEmail] = useState<string>("");
  const [email, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user: IUser = {
      name,
      email,
    };

    console.log(`USUARIO ${JSON.stringify(user)}`);

    // dispatch(login(user));
  };

  return (
    <div id="login">
      <h2>Login</h2>
      <p className="subtitle">Faça o login para ver o que há de novo.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setEmail(e.target.value)}
          value={name || ""}
        ></input>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setPassword(e.target.value)}
          value={email || ""}
        ></input>
        <input type="submit" value="Entrar" />
        {/* {!loading && <input type="submit" value="Entrar" />}
        {loading && <input type="submit" value="Aguarde..." disabled />}
        {error && <Message msg={error} type={"error"} />} */}
      </form>
      <p>
        Não tem uma conta? Clique aqui <Link to="/register">Clique aqui.</Link>
      </p>
    </div>
  );
};

export default Auth;
