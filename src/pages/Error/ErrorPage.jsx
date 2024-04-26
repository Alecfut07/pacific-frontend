import { useRouteError } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Typography color="red" variant="h1" className="mb-10">
        Oops!
      </Typography>
      <Typography variant="h3" className="mb-10">
        Lo sentimos, ha ocurrido un error inesperado.
      </Typography>
      <Typography color="gray">
        <i>Error: {error.statusText || error.message}</i>
      </Typography>
    </div>
  );
}

export default ErrorPage;
