import { Roboto, Inter, Lusitana } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});



export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
