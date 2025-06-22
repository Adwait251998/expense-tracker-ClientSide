function Home() {
  return (
    <div className="container text-center mt-5">
      <div className="p-5 bg-light rounded-4 shadow-sm">
        <h1 className="display-4 fw-bold text-primary">Expense Tracker</h1>
        <p className="lead mt-3">
          Take control of your spending. Track your expenses, set budgets, and
          achieve your financial goals — all in one place.
        </p>
        <button className="btn btn-primary btn-lg mt-4 px-5 rounded-pill">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
