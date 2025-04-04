
import { Button } from "./components/button";

export function App() {
  return <div>
    <Button name="Criar" onclick={() => alert("Criar")} />
    <Button name="Enviar" onclick={() => window.prompt("Digite seu nome")} />
    <Button name="Atualizar" onclick={() => window.confirm("Esta gostando do curso?")} />
  </div>


}

