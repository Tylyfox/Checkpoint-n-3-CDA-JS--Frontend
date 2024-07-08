import { useRouter } from 'next/router';
import { useFindCountryQuery } from '@/types/graphql';
import twemoji from 'twemoji';
import styles from '@/styles/CountryView.module.css';

const parseEmoji = (emoji: string): string => {
  return twemoji.parse(emoji, {
    folder: 'svg',
    ext: '.svg'
  });
};

const CountryView = () => {
  const router = useRouter();
  const { code } = router.query;
  const { data, loading, error } = useFindCountryQuery({
    variables: { code: code as string },
    skip: !code
  });

  if (loading) {
    return <div>Chargement en cours</div>;
  }

  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  if (!data?.country) {
    return <div>Aucune information trouvée pour ce pays</div>;
  }

  const { country } = data;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.country}>
          <div className={styles.emoji} dangerouslySetInnerHTML={{ __html: parseEmoji(country.emoji) }} />
        </div>
        <div className={styles.content}>
          <h2>{country.name}</h2>
          <p>Continent: {country.continent?.name}</p>
          <p>Code: {country.code}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryView;
