import { StatusBar } from 'expo-status-bar';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './Telas/home/index';
import Cad_Candidato from './Telas/cad_candidato/index';
import Cad_Partido from './Telas/cad_partido/index';
import Configurar from './Telas/configurar/index';
import Resultados from './Telas/resultados_eleicao/index';
import Votacao from './Telas/votacao/index';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Cad_Candidato,
    Cad_Partido,
    Configurar,
    Resultados,
    Votacao
  })
);

export default function App() {
  return (
    <Routes/>
  );
}
