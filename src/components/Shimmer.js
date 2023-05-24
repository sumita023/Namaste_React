const Shimmer = () => {
  return (
    <div className="restaurant-list" data-testid="shimmer">
      {Array(15)
        .fill("")
        .map(() => (
          <div className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
