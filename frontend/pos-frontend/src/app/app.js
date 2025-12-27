import { DialogDemo } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { RocketIcon, MagicWandIcon, StarIcon } from '@radix-ui/react-icons';

export default function App() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <RocketIcon className="w-10 h-10 text-green-600" />
          Mi Aplicación Next.js + Radix UI
        </h1>
        
        <div className="space-y-6">
          <section className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <MagicWandIcon className="w-6 h-6" />
              Botones de Ejemplo
            </h2>
            <div className="flex gap-3">
              <Button variant="primary">Botón Primary</Button>
              <Button variant="secondary">Botón Secondary</Button>
              <Button variant="outline">Botón Outline</Button>
            </div>
          </section>
          
          <section className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <StarIcon className="w-6 h-6" />
              Dialog de Radix UI
            </h2>
            <DialogDemo />
          </section>
        </div>
      </div>
    </main>
  );
}