function Spinner() {
  return (
    <>
      <main className="plan-container m-auto">
        <div className="d-flex justify-content-center ">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </main>
    </>
  );
}

export default Spinner;
