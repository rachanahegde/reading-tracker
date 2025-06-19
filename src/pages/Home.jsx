// Import components
import MainCreatureCard from "../components/MainCreatureCard";
import CurrentlyReading from "../components/CurrentlyReading";
import ProgressUpdates from "../components/ProgressUpdates";

export default function Home() {
  return (
    <div className="ml-6">
      <h1 className="font-josefin text-dark-brown italic text-xl mt-4 text-center">
        Grow your dragon by reading books.
      </h1>
      <MainCreatureCard />
      <CurrentlyReading />
      <ProgressUpdates />
    </div>
  );
}

// TODO Check if this new user or existing user - track user status using localstorage
// TODO When user first accesses website, display 2 dragon options to choose from. Then a series of other cards such as background options etc.

// TODO Set up context API with local storage for tracking book data
// TODO Figure out setting up the book search API
// TODO Track evolution of the assigned creature and XP required to evolve it
