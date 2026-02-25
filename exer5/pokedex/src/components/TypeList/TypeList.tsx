import React from 'react'
import styles from "./TypeList.module.css"
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

type Props = {
  types?: {
    type: { name: string };
  }[];
  loading: boolean;
};

const typeColors: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};


export default function TypeList({ types, loading }: Props) {
  if (!types) return null;

  return (
    <>
      <h4 className={styles.typeTitle}>Types:</h4>

      <div className={styles.typelistContainer}>
        {types.map((t, index) => {
          const typeName = t.type.name;

          return (
            <p
              key={index}
              className={styles.typeNames}
              style={{
                backgroundColor: typeColors[typeName],
              }}
            >
              {typeName}
            </p>
          );
        })}
      </div>
    </>
  );
}