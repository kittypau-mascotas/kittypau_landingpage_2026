export function NavbarBrand() {
  return (
    <div className="flex items-center gap-3">
      {/* Contenedor del Logo */}
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-primary/10 bg-white p-1.5 shadow-md -my-2">
        <img src="/icon.jpg" alt="Kittypau Logo" className="h-full w-full object-contain" />
      </div>
      {/* Marca y Bajada */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-primary leading-none" style={{ fontFamily: '"Titan One", sans-serif' }}>
          KittyPau
        </h1>
        <h3 
          className="text-gray-600 tracking-[0.25em] select-none text-[10px] leading-none mt-1"
          style={{ fontFamily: '"Titan One", sans-serif' }}
        >
          PetTech AIoT
        </h3>
      </div>
    </div>
  );
}