import { MotivationalMessage } from "./Component/MotivationalMessage"


function App() {
  return (
    <>
    <MotivationalMessage 
    message='O corpo alcança o que a mente acredita!'
    author="Pietro Abrahamian"
    />
    <MotivationalMessage 
    message='Dor é temporária. Desistir dura para sempre.'
    author="Lance Armstrong"
    />
    <MotivationalMessage 
    message='O sucesso é a soma de pequenos esforços repetidos dia após dia.'
    author="Robert Collier"
    />
    </>
  )
}

export default App
