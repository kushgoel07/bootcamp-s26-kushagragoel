import React from 'react'
import styles from "./InfoMovesPanel.module.css"
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";


type Stat = {
    base_stat: number;
    stat: {
        name:string;
    };
};

type Props = {
    activeTab: "info" | "moves";
    setActiveTab: React.Dispatch<React.SetStateAction<"info" | "moves">>;
    stats?: Stat[];
    moves?: string[];
}


export default function InfoMovesPanel({
    activeTab,
    setActiveTab,
    stats,
    moves,
}: Props) {

    return (
        <div className={styles.container}>
        <h2 className={styles.title}>
            {activeTab === "info" ? "Info" : "Moves"}
        </h2>

        <div className={styles.text}>
            {activeTab === "info" && (
            <>
                {stats && stats.length > 0 ? (
                stats.map((s, index) => (
                    <p key={index} className={styles.statLine}>
                    {s.stat.name}: {s.base_stat}
                    </p>
                ))
                ) : (
                <p className={styles.placeholder}>Loading stats...</p>
                )}
            </>
            )}

            {activeTab === "moves" && (
            <>
                {moves && moves.length > 0 ? (
                moves.slice(0, 10).map((move, index) => (
                    <p key={index} className={styles.statLine}>{move} </p>
                ))
                ) : (
                <p className={styles.placeholder}>Loading moves...</p>
                )}
            </>
            )}
        </div>
        <div className={styles.buttons}>
            <button
            className={`${styles.InfoButton} ${
                activeTab === "info" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("info")}
            >
            Info
            </button>

            <button
            className={`${styles.MovesButton} ${
                activeTab === "moves" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("moves")}
            >
            Moves
            </button>
        </div>
        </div>

    )


}