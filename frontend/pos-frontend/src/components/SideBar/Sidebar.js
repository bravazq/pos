'use client';

import { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import * as Separator from '@radix-ui/react-separator';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import {
  HamburgerMenuIcon,
  Cross1Icon,
  PaperPlaneIcon,
  PersonIcon,
  GearIcon,
  FileTextIcon,
  ChevronDownIcon,
  DashboardIcon,
  BarChartIcon,
  EnvelopeClosedIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const menuItems = [

    {
      name: 'Dashboard',
      icon: <DashboardIcon className="w-5 h-5" />,
      href: '/dashboard',
    },
    {
      name: 'Nueva venta',
      icon: <PaperPlaneIcon className="w-5 h-5" />,
      href: '/nueva-venta',
    },
    {
      name: 'Productos',
      icon:  <FileTextIcon className="w-5 h-5" />,
      submenu: [
        { name: 'Lista', href: '/productos' },
        { name: 'Agregar', href: '/productos/nuevo' },
        { name: 'Categorías', href: '/productos/categorias' },
      ],
    },
    {
      name:  'Reportes',
      icon: <BarChartIcon className="w-5 h-5" />,
      submenu: [
        { name: 'Ventas', href: '/reportes/ventas' },
        { name:  'Inventario', href:  '/reportes/inventario' },
      ],
    },
    // {
    //   name: 'Mensajes',
    //   icon: <EnvelopeClosedIcon className="w-5 h-5" />,
    //   href: '/mensajes',
    //   badge: 3,
    // },
  ];

  const bottomMenuItems = [
    {
      name: 'Perfil',
      icon: <PersonIcon className="w-5 h-5" />,
      href: '/perfil',
    },
    {
      name: 'Configuración',
      icon: <GearIcon className="w-5 h-5" />,
      href: '/configuracion',
    },
  ];

  return (
    <>
      {/* Botón móvil para abrir sidebar */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-40 lg:hidden p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        <HamburgerMenuIcon className="w-6 h-6" />
      </button>

      {/* Overlay para móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-gray-200
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="font-bold text-lg">Mi App</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-1 hover:bg-gray-100 rounded"
            >
              <Cross1Icon className="w-5 h-5" />
            </button>
          </div>

          {/* Search */}
          {/* <div className="p-4">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div> */}

          {/* <Separator.Root className="bg-gray-200 h-[1px]" /> */}

          {/* Menu Items con Scroll */}
          <ScrollArea. Root className="flex-1 overflow-hidden">
            <ScrollArea. Viewport className="w-full h-full">
              <nav className="p-4 space-y-1">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <Collapsible.Root
                        open={openSubmenu === item.name}
                        onOpenChange={() => toggleSubmenu(item.name)}
                      >
                        <Collapsible.Trigger className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                          <div className="flex items-center gap-3">
                            {item. icon}
                            <span className="font-medium">{item. name}</span>
                          </div>
                          <ChevronDownIcon
                            className={`w-4 h-4 transition-transform ${
                              openSubmenu === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </Collapsible.Trigger>
                        <Collapsible.Content className="mt-1">
                          <div className="ml-8 space-y-1">
                            {item.submenu. map((subItem) => (
                              <a
                                key={subItem. name}
                                href={subItem.href}
                                className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </Collapsible.Content>
                      </Collapsible.Root>
                    ) : (
                      <a
                        href={item.href}
                        className="flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {item. icon}
                          <span className="font-medium">{item. name}</span>
                        </div>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </a>
                    )}
                  </div>
                ))}
              </nav>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className="flex select-none touch-none p-0. 5 bg-gray-100 transition-colors duration-150 ease-out hover:bg-gray-200"
              orientation="vertical"
            >
              <ScrollArea. Thumb className="flex-1 bg-gray-400 rounded-full relative before:content-[''] before:absolute before: top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea. Scrollbar>
          </ScrollArea.Root>

          {/* Bottom Menu */}
          <div className="border-t border-gray-200 p-4 space-y-1">
            {bottomMenuItems. map((item) => (
              <a
                key={item. name}
                href={item. href}
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </div>

          {/* User Info */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">BV</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">bravazq</p>
                <p className="text-xs text-gray-500">usuario@email.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}