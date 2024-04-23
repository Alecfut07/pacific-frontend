import { useRouteError } from "react-router-dom";
import { Typography, Container } from "@material-tailwind/react";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center h-screen">
        <Typography color="red" size="xl">
          Oops!
        </Typography>
        <Typography color="gray" size="lg">
          Lo sentimos, ha ocurrido un error inesperado.
        </Typography>
        <Typography color="gray">
          <i>{error.statusText || error.message}</i>
        </Typography>
      </div>
    </Container>
  );
}

export default ErrorPage;
