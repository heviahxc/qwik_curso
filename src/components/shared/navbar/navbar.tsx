import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../../icons/qwik';
import styles from './navbar.module.css';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <Link href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </Link>
        </div>
        <ul>
        
          <li>
           <Link href='/pokemons/list-ssr/'>SSR</Link>
          </li>
          <li>
          <Link href='/pokemons/list-client/'>Client</Link>
          </li>
          
        </ul>
      </div>
    </header>
  );
});
