import styles from "@/styles/CountryCard.module.css";
import { ListCountriesQuery } from '@/types/graphql';
import Link from 'next/link';
import twemoji from 'twemoji';

const CountryCard = ({ countries }: { countries: ListCountriesQuery['countries'] }) => {
  const parseEmoji = (emoji: string): string => {
    return twemoji.parse(emoji, {
      folder: 'svg',
      ext: '.svg'
    });
  };

  return (
    <>
      <div className={styles.container}>
        {countries.map((c) => (
          <div className={styles.card} key={c.id}>
            <div className={styles.country}>
              <div className={styles.emoji} dangerouslySetInnerHTML={{ __html: parseEmoji(c.emoji) }} />
              <div className={styles.content}>
                <h2>{c.name}</h2>
                <Link className={styles.button} href={`/countries/view/${c.code}`}>Détails</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountryCard;
