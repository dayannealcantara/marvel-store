import * as S from './styles';

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
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.ContainerInput>
        <label htmlFor="road">Rua</label>
        <input {...register('road')} />
        <p>{errors.road?.message}</p>
      </S.ContainerInput>
      <S.ContainerInput>
        <label htmlFor="number">Numero</label>
        <input {...register('number')} />
        <p>{errors.number?.message}</p>
      </S.ContainerInput>
      <S.ContainerInput>
        <label htmlFor="district">Bairro</label>
        <input {...register('district')} />
        <p>{errors.district?.message}</p>
      </S.ContainerInput>
      <S.ContainerInput>
        <label htmlFor="city">Cidade</label>
        <input {...register('city')} />
        <p>{errors.city?.message}</p>
      </S.ContainerInput>

      <S.ContainerInput>
        <label htmlFor="state">Estado</label>
        <select {...register('state')}>
          <option value="">Selecione um estado</option>
          {statesBR.map((state) => (
            <option key={state.sigla} value={state.nome}>
              {state.nome}
            </option>
          ))}
        </select>
        <p>{errors.state?.message}</p>
      </S.ContainerInput>
      <S.Button type="submit">Salvar Enderećo</S.Button>
    </S.Form>
  );
};

export default FormAddress;
