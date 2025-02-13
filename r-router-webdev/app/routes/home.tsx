import type { Route } from "./+types/home"; 

import Page1 from "~/routes/financas";
import Page3 from "~/routes/compras";
import Page2 from "~/routes/dashboard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="container flex flex-col gap-2">
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}
