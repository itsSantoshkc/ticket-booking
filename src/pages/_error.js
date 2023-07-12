function Error({ statusCode }) {
  return (
    <>
      <div
        className="flex h-screen items-center justify-center bg-zinc-950"
        style={{ minHeight: "100vh" }}
      >
        <h1
          className="text-white"
          style={{ fontWeight: "bolder", fontSize: "clamp(10px,25px,50px)" }}
        >
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : "An error occurred on client"}
        </h1>
      </div>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
