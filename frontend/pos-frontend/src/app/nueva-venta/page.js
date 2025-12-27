import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/Button";
import { MagnifyingGlassIcon, FileTextIcon, TrashIcon, Cross2Icon, CheckCircledIcon, CounterClockwiseClockIcon } from "@radix-ui/react-icons";
import * as Separator from "@radix-ui/react-separator";

export default function NuevaVenta() {
    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3 mb-10">Nueva Venta</h1>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                
                <div className="relative">
                    <h3 className="font-bold text-sm mb-4"> Escanear Producto </h3>
                    <MagnifyingGlassIcon className="absolute left-3 top-2/15 -translate-y-1/2 w-4 h-4 text-gray-700" />
                    <input
                        type="text"
                        placeholder="Código de barras o SKU..."
                        className="w-full pl-10 mb-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <h3 className="font-bold text-sm mb-8"> Acceso Rápido </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <div className="flex items-center justify-center mb-4">
                                <h3 className="text-lg font-semibold">Frutas y Verduras</h3>
                            </div>
                        </div>
            
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <div className="flex items-center justify-center mb-4">
                                <h3 className="text-lg font-semibold">Hielo</h3>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <div className="flex items-center justify-center mb-4">
                                <h3 className="text-lg font-semibold">Recargas</h3>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-30 p-10 rounded-lg shadow-md border border-gray-200">
                        <p className="text-md font-medium text-gray-500 mb-4 text-center"> 
                            <CounterClockwiseClockIcon className="inline-block w-5 h-5 mr-2 text-gray-400" />
                            Las ventas recientes o productos frencuentes aparecerán aquí 
                        </p>
                    </div>

                </div>


                <div className="bg-white p-10 rounded-lg shadow-md border border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                        <h3 className="font-bold text-md mb-4"> 
                            <FileTextIcon className="inline-block w-5 h-5 mr-2 text-green-500" />    
                            Ticket Actual #
                        </h3>
                        <h3 className="font-bold text-md text-end text-red-500 mb-4"> 
                            <TrashIcon className="inline-block w-5 h-5 ml-2 text-red-500 hover:text-red-700 cursor-pointer" />
                            Limpiar
                        </h3>
                    </div>

                    <Separator.Root className="bg-gray-200 h-[1px]" /> 

                    <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
                        <h3 className="font-bold text-sm mt-4 mb-4"> PRODUCTO </h3>
                        <h3 className="font-bold text-sm mt-4 mb-4"> CANTIDAD </h3>
                        <h3 className="font-bold text-sm mt-4 mb-4"> SUBTOTAL </h3>    
                    </div>

                    <Separator.Root className="bg-gray-200 h-[1px]" /> 
                    
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                        <h3 className="text-sm mt-4 mb-4 text-gray-500"> Subtotal </h3>
                        <h3 className="text-sm text-end mt-4 mb-4 text-gray-500"> $10.00 </h3> 
                    </div>

                    <Separator.Root className="bg-gray-200 h-[1px]" /> 

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                        <h3 className="font-bold text-xl mt-4"> Total a pagar </h3>
                        <h3 className="font-bold text-xl text-end text-green-500 mt-4"> $10.00 </h3> 
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                        <Button variant="secondary"> 
                            <Cross2Icon className="inline-block w-5 h-5 mr-2" />
                            CANCELAR 
                        </Button>
                        <Button variant="primary"> 
                            <CheckCircledIcon className="inline-block w-5 h-5 mr-2" />
                            COBRAR 
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}