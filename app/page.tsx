import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <header className="sticky top-0 h-20 bg-white">
        <Header />
      </header>
      <main>
        <section className="py-5">
          <Banner />
        </section>
        <section>
          <MainContent />
        </section>
      </main>
    </div>
  );
}
