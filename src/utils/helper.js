

export function filterData(restaurants, searchText) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    // console.log(filterData);
    return filterData;
  }
  