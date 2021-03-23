import React, { useCallback, useState } from 'react';

import ConfigOptions from '../../components/ConfigOptions';

import Button from '../../components/Button';

import { ContainerApplicationSettings } from './styles';

const configOptions = [
  {
    id: 1,
    title: 'Automático',
    subtitle:
      'Assista com a mais alta qualidade disponivel até 4K UHD(4,2GB/h)',
  },
  {
    id: 2,
    title: 'Moderado',
    subtitle: 'Use menos dados, assista com qualidade até HD (1,2GB/h)',
  },
  {
    id: 3,
    title: 'Econômia de dados',
    subtitle:
      'Use a menor quantidade de dados, assita com qualidade SD (0,6GB/h)',
  },
];

const ApplicationSettings = () => {
  const [selectedOptions, setSelectedOptions] = useState(1);

  const handleClickOnOption = useCallback((optionId: number) => {
    setSelectedOptions(optionId);
  }, []);

  return (
    <ContainerApplicationSettings>
      <h1 className="title">Configurações Do Aplicativo</h1>
      <span className="dataUsage">USO DE DADOS</span>

      {configOptions.map(option => (
        <ConfigOptions
          onClick={() => handleClickOnOption(option.id)}
          isActivated={selectedOptions === option.id}
          title={option.title}
          subtitle={option.subtitle}
        />
      ))}
      <Button style={{ marginTop: 45 }}>Salvar</Button>
    </ContainerApplicationSettings>
  );
};

export default ApplicationSettings;
