import MainCreatureCard from "../components/MainCreatureCard";

export default function Home() {
  return (
    <div className="ml-6">
      <h1 className="font-josefin text-dark-brown italic text-xl mt-4 text-center">
        Grow your dragon by reading books.
      </h1>
      {/* Card displaying dragon with background, buttons for adding book and selecting background, creature progress bar, books read, total XP, menagerie button and view all books btn */}
      <MainCreatureCard />
    </div>
  );
}

// TODO Set up context API with local storage for tracking book data
// TODO Track evolution of the assigned creature and XP required to evolve it

// TODO Figure out setting up the book search API
