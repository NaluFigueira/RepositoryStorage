import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImage} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
          alt="Rocketseat"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>
            Easy peasy highly scalable ReactJS and React Native forms!
            https://unform.dev
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
          alt="Rocketseat"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>
            Easy peasy highly scalable ReactJS and React Native forms!
            https://unform.dev
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
          alt="Rocketseat"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>
            Easy peasy highly scalable ReactJS and React Native forms!
            https://unform.dev
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
          alt="Rocketseat"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>
            Easy peasy highly scalable ReactJS and React Native forms!
            https://unform.dev
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
