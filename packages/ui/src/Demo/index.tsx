import styles from "./index.module.scss";

interface DemoProps {
  title?: string| any[]
}


export const Demo = ({ title='aaa' }: DemoProps) => {
  return <div className={styles.bb}>{title || ''}</div>
}
