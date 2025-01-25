// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

/*
React Components Tutorial
- src/pages/qcomps/gallery_props.tsx
- src/pages/qcomps/list_keys_id.tsx
- src/pages/qcomps/recipes.tsx
*/

import Gallery from "./qcomps/gallery_props";
import List from "./qcomps/list_keys_id";
import RecipeList from "./qcomps/recipes";

export default function Home() {
  return (
    <div>
      <Gallery />
      <List />
      <RecipeList />
    </div>
  );
}
