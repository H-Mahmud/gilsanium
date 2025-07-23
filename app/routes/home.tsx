import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Gilsanium | Home' }, { name: 'description', content: 'Welcome to Gilsanium!' }];
}

export default function Home() {
  return <h1>Hello World!</h1>;
}
