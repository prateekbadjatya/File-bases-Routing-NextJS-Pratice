import React from "react";
import { useRouter } from "next/router";

const FilteredEventPage = () => {
  const routes = useRouter();

//   console.log(routes.query?.slug);
  return (
    <div>
      <h1>The Filtered EVent Page</h1>
    </div>
  );
};

export default FilteredEventPage;
