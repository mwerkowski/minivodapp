function Error({ message }: { message?: string }) {
  return (
    <div className="flex justify-center align-middle text-xl text-red-700">
      {message || "Could not fetch data"}
    </div>
  );
}

export default Error;
