import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useCreateCountryMutation, useListContinentsQuery } from '@/types/graphql';
import styles from '@/styles/CreateCountry.module.css';
import { ApolloError } from '@apollo/client';

type FormType = {
  name: string;
  code: string;
  emoji: string;
  continentId: number;
};

const CreateCountry = () => {
  const router = useRouter();
  const [createCountry, { loading: loadingCountry }] = useCreateCountryMutation();
  const { data, loading } = useListContinentsQuery();
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = async (infos) => {
    console.log('Form data:', infos);

    try {
      const response = await createCountry({
        variables: {
          infos: {
            name: infos.name,
            code: infos.code,
            emoji: infos.emoji,
            continent: parseInt(infos.continentId as unknown as string, 10) // Assurez-vous que la valeur est un entier
          }
        }
      });

      if (response.data?.addCountry) {
        router.push(`/`);
      }
    } catch (err) {
      if (err instanceof ApolloError) {
        console.error('ApolloError:', err.message, err.graphQLErrors, err.networkError);
      } else {
        console.error(err);
      }
    }
  };

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Créer un pays</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: "Le nom est requis" })} placeholder="Nom" />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}

        <input {...register("code", { required: "Le code est requis" })} placeholder="Code" />
        {errors.code && <p className={styles.error}>{errors.code.message}</p>}

        <input {...register("emoji", { required: "L'emoji est requis" })} placeholder="Emoji" />
        {errors.emoji && <p className={styles.error}>{errors.emoji.message}</p>}

        <select {...register("continentId", { required: "Le continent est requis" })}>
          <option value="">Choisissez un continent</option>
          {data?.continents.map((continent) => (
            <option key={continent.id} value={continent.id}>{continent.name}</option>
          ))}
        </select>
        {errors.continentId && <p className={styles.error}>{errors.continentId.message}</p>}

        <input type="submit" disabled={loadingCountry} />
      </form>
    </div>
  );
};

export default CreateCountry;
