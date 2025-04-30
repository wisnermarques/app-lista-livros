import { useState } from 'react';

const ListaLivros = ({ livros, removerLivro, editandoId, iniciarEdicao, salvarEdicao }) => {
    const [novoTitulo, setNovoTitulo] = useState('');
    const [novaDescricao, setNovaDescricao] = useState('');
    const [novaCapa, setNovaCapa] = useState('');

    const cancelarEdicao = () => {
        setNovoTitulo('');
        setNovaDescricao('');
        setNovaCapa('');
        iniciarEdicao(null); // Sai do modo edição
    };

    return (
        <ul className="list-group">
            {livros.map(livro => (
                <li key={livro.id} className="list-group-item">
                    {editandoId === livro.id ? (
                        <div className="d-flex flex-column gap-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Título"
                                value={novoTitulo}
                                onChange={(e) => setNovoTitulo(e.target.value)}
                            />
                            <textarea
                                rows={5}
                                className="form-control"
                                placeholder="Descrição"
                                value={novaDescricao}
                                onChange={(e) => setNovaDescricao(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="URL da Capa"
                                value={novaCapa}
                                onChange={(e) => setNovaCapa(e.target.value)}
                            />
                            <div className="mt-2 d-flex gap-2">
                                <button
                                    className="btn btn-sm btn-success"
                                    onClick={() => salvarEdicao(livro.id, {
                                        titulo: novoTitulo || livro.titulo,
                                        descricao: novaDescricao || livro.descricao,
                                        capa: novaCapa || livro.capa
                                    })}
                                >
                                    Salvar
                                </button>
                                <button
                                    className="btn btn-sm btn-secondary"
                                    onClick={cancelarEdicao}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="d-flex align-items-center">
                            {/* Capa + Texto */}
                            <div className="d-flex gap-3 flex-grow-1">
                                <img
                                    src={livro.capa}
                                    alt={livro.titulo}
                                    style={{ width: '70px', height: '90px', objectFit: 'cover' }}
                                />
                                <div>
                                    <h5 className="mb-1">{livro.titulo}</h5>
                                    <p className="mb-0">{livro.descricao || 'Sem descrição'}</p>
                                </div>
                            </div>

                            {/* Botões */}
                            <div className="ms-3 d-flex align-items-center flex-shrink-0">
                                <button
                                    className="btn btn-sm btn-outline-primary me-2"
                                    onClick={() => {
                                        setNovoTitulo(livro.titulo);
                                        setNovaDescricao(livro.descricao);
                                        setNovaCapa(livro.capa);
                                        iniciarEdicao(livro.id);
                                    }}
                                >
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => removerLivro(livro.id)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ListaLivros;
