import CountryCard from "./countries/CountryCard";
import { useListCountriesQuery } from "@/types/graphql";
import Link from 'next/link';
import styles from "@/styles/CountryCard.module.css";

export default function Header() {

  const { data, loading } = useListCountriesQuery({
    fetchPolicy: "no-cache"
  });
  if (loading) {
    return <div>Chargement en cours</div>;
  }

  return (
    <header className="header">
      <h1>Checkpoint : frontend</h1>
      {data?.countries.length ? (
        <CountryCard countries={data.countries} />
      ) : (
        <div>Aucun Pays</div>
      )}
           <Link className={styles.button} href={`/countries/create/`}>Créer un nouveau pays</Link>
    </header>
  );
}
