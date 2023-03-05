
export function App() {
  return (
    <div className="container">

      <div class="shadow p-3 mb-5 rounded borda">
        <header className=" header">
          <h1 class="text-center"> Área do Cliente </h1>
          <br />

        </header>

        <body class="text-center" />
        <main class="form-signin w-100 m-auto"></main>

        <form>
          <div class="form-floating-3">
            <div class="input-group-prepend">

            </div>
            <input type="text" class="form-control" placeholder="CPF" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <br />


          <div class="form-floating-3">
            <div class="input-group-prepend">

            </div>
            <input type="password" class="form-control" placeholder="Senha" aria-label="Username" aria-describedby="basic-addon1" />
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="Lembrar Senha" /> Lembrar Senha
            </label>
          </div>
          <button className="btn botao">
            Entra

          </button>

        </form>
      </div>
    </div>
  );
}
export default App
