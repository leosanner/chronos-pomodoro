import './styles/global.css';
import './styles/theme.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='input'
              labelText='Texto'
              type='text'
              placeholder='Digite Algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <button>Botao</button>
          </div>
        </form>
      </Container>
    </>
  );
}
