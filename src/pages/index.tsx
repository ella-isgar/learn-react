// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

/*
React Components Tutorial
- src/pages/qcomps/gallery_props.tsx
- src/pages/qcomps/list_keys_id.tsx
- src/pages/qcomps/recipes.tsx

import Gallery from "./qcomps/gallery_props";
import List from "./qcomps/list_keys_id";
import RecipeList from "./qcomps/recipes";
*/

/*
React State Management Tutorial
- src/pages/qcomps/state.tsx
- src/pages/qcomps/stuckForm.tsx
- src/pages/qcomps/shoppingCart.tsx
- src/pages/qcomps/updObjectsForm.tsx
- src/pages/qcomps/artistsRemoveArr.tsx
- src/pages/qcomps/arrObj.tsx
*/

import Gallery from "./qcomps/state";
import Form from "./qcomps/stuckForm";
import RequestTracker from "./qcomps/shoppingCart";
import Scoreboard from "./qcomps/updObjectsForm";
import List from "./qcomps/artistsRemoveArr";
import BucketList from "./qcomps/arrObj";

export default function Home() {
  return (
    <div>
      <Gallery />
      <Form />
      <RequestTracker />
      <Scoreboard />
      <List />
      <BucketList />
    </div>
  );
}
