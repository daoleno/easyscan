import { WithChildren } from "@/types/common";
import Nav from "./Nav";

export default function Layout({ children }: WithChildren) {
  return (
    <div className="py-6 z-10">
      <Nav />
      <section>{children}</section>
    </div>
  );
}
