import { component$, Slot, useStyles$ } from '@builder.io/qwik';


import NavBar from '~/components/shared/navbar/navbar';
import Footer from '~/components/shared/footer/footer';

import styles from './styles.css?inline';



export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <NavBar />
      <main class="flex flex-col items-center justify-center">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
