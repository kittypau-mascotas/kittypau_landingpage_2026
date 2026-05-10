export function NavbarBrand() {
  return (
    <div className="flex items-center gap-3">
      {/* Contenedor del Logo */}
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-primary/10 bg-white p-1.5 shadow-md -my-2">
        <img src="/icon.jpg" alt="Kittypau Logo" className="h-full w-full object-contain" />
      </div>
      {/* Marca y Bajada */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-titan-one text-primary leading-none">KittyPau</h1>
        <p className="font-titan-one font-bold text-xs leading-none text-gray-600 sm:text-sm">
          PetTech AIoT
        </p>
      </div>
    </div>
  );
}