import React, { useState, useEffect } from "react";

import "./styles.css";

import api from './services/api';

import logo from './assets/logo.png';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepositories(){
      const response = await api.get('repositories');
      setRepositories(response.data);
    }

    loadRepositories();
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: `${Date.now()}`,
      url: `http://www.${Date.now()}.com`,
      techs: ['React','Node','React Native']
    });
    setRepositories([...repositories, response.data]);
  }
  
  async function handleRemoveRepository(id) {
    const repositoryIndex = repositories.findIndex(repository => repository.id === id);
    await api.delete(`repositories/${id}`);
    const repositoriesCopy = [...repositories];
    repositoriesCopy.splice(repositoryIndex, 1);
    setRepositories(repositoriesCopy);
  }

  return (
    <>
      <div className="title">
        <img src={logo} alt="RepositoryStorage" />
        <strong>Repository Storage</strong>
      </div>
      <div>
        <ul data-testid="repository-list">
          {
            repositories.map((repository, index) => (
              <li key={repository.id} >
                {repository.title}
                <button onClick={() => handleRemoveRepository(repository.id)}>
                  Remover
                </button>
              </li>
            ))
          }
        </ul>
        <button onClick={handleAddRepository}>Adicionar</button>
      </div>
    </>
  );
}

export default App;
