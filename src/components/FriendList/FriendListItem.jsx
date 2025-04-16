import styles from "./FriendList.module.css";
export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClass = isOnline ? styles.online : styles.offline;
  const statusText = isOnline ? "Online" : "Offline";

  return (
    <>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={statusClass}>{statusText}</p>
    </>
  );
}
