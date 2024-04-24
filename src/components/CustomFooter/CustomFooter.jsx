import { Typography } from "@material-tailwind/react";

function CustomFooter() {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full items-center justify-center border-t border-blue-gray-50 bg-white py-6 text-center">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2024 Inventario - DEMO
      </Typography>
    </footer>
  );
}

export default CustomFooter;
