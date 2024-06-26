import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center">Your Blank Canvas</h1>
        <p className="text-center">
          Chat with the agent to start making edits.
        </p>
        <div className="text-center mt-4">
          <Link to="/hacker-news-top-stories" className="text-blue-500">
            View Hacker News Top Stories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;