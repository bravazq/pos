import { Layout } from '@/components/Layout';
import { RocketIcon, StarIcon, LightningBoltIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          <RocketIcon className="w-10 h-10 text-blue-600" />
          Bienvenido a tu Dashboard
        </h1>
        <p className="text-gray-600 mb-8">
          Esta es tu aplicación con Next.js y Radix UI
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Usuarios</h3>
              <StarIcon className="w-6 h-6 text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
            <p className="text-sm text-gray-500 mt-2">+12% vs mes anterior</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Ventas</h3>
              <LightningBoltIcon className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-blue-600">$45,678</p>
            <p className="text-sm text-gray-500 mt-2">+8% vs mes anterior</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Productos</h3>
              <RocketIcon className="w-6 h-6 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-blue-600">567</p>
            <p className="text-sm text-gray-500 mt-2">En stock</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Actividad Reciente</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4]. map((item) => (
              <div key={item} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">{item}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Actividad {item}</p>
                  <p className="text-sm text-gray-500">Descripción de la actividad</p>
                </div>
                <span className="text-sm text-gray-400">Hace 2h</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}