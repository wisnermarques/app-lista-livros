import { useState } from 'react'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListaLivros from './components/ListaLivros';

const App = () => {
  const [livros, setLivros] = useState([
    { id: 1, titulo: 'O livro da capa verde', descricao: 'O livro da capa verde', capa: 'https://storage.googleapis.com/images.uiclap.com/capa/ua44733.jpg' },
    { id: 2, titulo: 'Introdução à Administração', descricao: '', capa: 'https://www.lojaviena.com.br/imgsProdutos/Produto_1135/IMG_1135_3_3.jpg' },
    { id: 3, titulo: 'Manutenção Completa em Computadores', descricao: '', capa: 'https://www.lojaviena.com.br/imgsProdutos/Produto_1128/IMG_1128_8_3.jpg' }
  ]);
  const [editandoId, setEditandoId] = useState(null);

  const adicionarLivro = (livro) => {
    const novoLivro = { id: Date.now(), ...livro };
    setLivros([...livros, novoLivro]);
  };
  

  const removerLivro = (id) => {
    setLivros(livros.filter(l => l.id !== id));
  };

  const iniciarEdicao = (id) => {
    setEditandoId(id);
  };

  const salvarEdicao = (id, novoLivro) => {
    setLivros(livros.map(l => (l.id === id ? { ...l, ...novoLivro } : l)));
    setEditandoId(null);
  };  

  return (
    <div className="container mt-4">
      <Header />
      <Formulario adicionarLivro={adicionarLivro} />
      <ListaLivros
        livros={livros}
        removerTarefa={removerLivro}
        editandoId={editandoId}
        iniciarEdicao={iniciarEdicao}
        salvarEdicao={salvarEdicao}
      />
      <Footer />
    </div>
  );
};

export default App