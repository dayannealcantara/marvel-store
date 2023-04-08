import { Form, ContainerInput, Button, Input, Select, Error } from './styles';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { statesBR } from 'utils/statesBR';

const schema = yup
  .object({
    road: yup.string().required('Campo obrigatório'),
    number: yup.string().matches(/^[0-9]+$/, 'Numero Obrigatório'),
    district: yup.string().required('Campo obrigatório'),
    city: yup.string().required('Campo obrigatório'),
    state: yup.string().required('Campo obrigatório')
  })
  .required();
export type FormData = yup.InferType<typeof schema>;

interface FormAddressProps {
  setAddress: (address: FormData) => void;
}

const FormAddress = ({ setAddress }: FormAddressProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData) => {
    setAddress(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ContainerInput>
        <label htmlFor="road">Rua</label>
        <Input {...register('road')} />
        <Error>{errors.road?.message}</Error>
      </ContainerInput>
      <ContainerInput>
        <label htmlFor="number">Numero</label>
        <Input {...register('number')} />
        <Error>{errors.number?.message}</Error>
      </ContainerInput>
      <ContainerInput>
        <label htmlFor="district">Bairro</label>
        <Input {...register('district')} />
        <Error>{errors.district?.message}</Error>
      </ContainerInput>
      <ContainerInput>
        <label htmlFor="city">Cidade</label>
        <Input {...register('city')} />
        <Error>{errors.city?.message}</Error>
      </ContainerInput>
      <ContainerInput>
        <label htmlFor="state">Estado</label>
        <Select {...register('state')}>
          <option value="">Selecione um estado</option>
          {statesBR.map((state) => (
            <option key={state.sigla} value={state.nome}>
              {state.nome}
            </option>
          ))}
        </Select>
        <Error>{errors.state?.message}</Error>
      </ContainerInput>
      <Button type="submit">Salvar Enderećo</Button>
    </Form>
  );
};

export default FormAddress;
