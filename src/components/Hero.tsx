import { PickupForm } from "./PickupForm";

export const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold mb-5">
                Recicle Hoje para um Amanhã Sustentável
              </h1>
              <p className="text-lg text-gray-500 mb-8">
                Faça parte da mudança. Descarte seus resíduos eletrônicos de forma
                responsável e contribua para um futuro mais sustentável.
              </p>
              <PickupForm />
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <img
              className="w-full h-auto rounded-lg shadow-xl"
              src="/lovable-uploads/ce3de26b-0d89-400e-8de5-16a8e9deb5d5.png"
              alt="Reciclagem de eletrônicos"
            />
          </div>
        </div>
      </div>
    </section>
  );
};