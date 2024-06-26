import React, { useState } from "react";
import { useQuery } from "react-query";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fetchTopStories = async () => {
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const storyIds = await response.json();
  const stories = await Promise.all(
    storyIds.slice(0, 100).map(async (id) => {
      const storyResponse = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      );
      return storyResponse.json();
    })
  );
  return stories;
};

const HackerNewsTopStories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useQuery("topStories", fetchTopStories);

  const filteredStories = data?.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <Input
        placeholder="Search stories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      {isLoading ? (
        <Skeleton className="w-full h-8 mb-4" count={10} />
      ) : (
        filteredStories?.map((story) => (
          <Card key={story.id} className="mb-4">
            <CardHeader>
              <CardTitle>{story.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Upvotes: {story.score}</p>
              <a href={story.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default HackerNewsTopStories;