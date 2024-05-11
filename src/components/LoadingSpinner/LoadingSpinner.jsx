import { Spinner } from "@material-tailwind/react";

function LoadingSpinner({ loading, component }) {
  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? (
        <>
          <Spinner className="h-16 w-16" />
          <p className="text-lg text-gray-600">Cargando</p>
        </>
      ) : (
        component
      )}
    </div>
  );
}

export default LoadingSpinner;
