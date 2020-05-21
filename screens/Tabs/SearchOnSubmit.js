import React from "react";
import SearchPresenter from "./SearchPresenter";

export default ({ navigation, term, shouldFetch }) => {
  return (
    <SearchPresenter
      term={term}
      navigation={navigation}
      shouldFetch={shouldFetch}
    />
  );
};
