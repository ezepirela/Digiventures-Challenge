
import Link from "next/link";

export default function Index() {
  return (
    <main className='index__main'> 
      <section>
        <h1 className='index__title'>Digiventures Challenge</h1>
      </section>
      <section>
        <ul>
          <li>
            <Link href="/login" as="/login">
              <a>go to login Page</a>
            </Link>
          </li>
          <li>
            <Link href="/register" as="/register">
              <a>go to Register Page</a>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
