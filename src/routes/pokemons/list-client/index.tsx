import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <>Hola Mundo - Client</>
});

export const head: DocumentHead = {
  title: 'List - CLient',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
