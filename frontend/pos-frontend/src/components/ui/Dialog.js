
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

export function DialogDemo() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Abrir Dialog
        </button>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-[90vw] max-w-md">
          <Dialog.Title className="text-xl font-bold mb-4">
            Título del Dialog
          </Dialog.Title>
          
          <Dialog.Description className="text-gray-600 mb-4">
            Esta es una descripción del dialog usando Radix UI.
          </Dialog.Description>
          
          <div className="flex justify-end gap-3">
            <Dialog.Close asChild>
              <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                Cancelar
              </button>
            </Dialog.Close>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover: bg-blue-700">
              Confirmar
            </button>
          </div>
          
          <Dialog.Close asChild>
            <button className="absolute top-3 right-3 p-1 hover:bg-gray-100 rounded">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog. Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}