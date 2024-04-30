import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";

function CustomDrawer({ placement, open, onClose }) {
  return (
    <Drawer placement={placement} open={open} onClose={onClose} className="p-4">
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          "Cantidad" productos en el carrito
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <Typography color="gray" className="mb-8 pr-4 font-normal">
        Subtotal: $0.00 MXN
      </Typography>
      <div className="flex">
        <Button size="sm" variant="outlined">
          Ver y editar carrito
        </Button>
      </div>
    </Drawer>
  );
}

export default CustomDrawer;
