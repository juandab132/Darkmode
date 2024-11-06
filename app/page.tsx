// pages/index.tsx

import ThemeSwitch from '../app/components/ThemeSwitch';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <header className="flex justify-between w-full max-w-4xl p-4">
        <h1 className="text-2xl font-bold">Mi Portafolio</h1>
        <ThemeSwitch />
      </header>
      <main className="text-center p-8">
        <h2 className="text-4xl mb-4">¡Hola! Soy Juan David</h2>
        <p className="text-lg">
          Bienvenido a mi portafolio. Soy estudiante de Ingeniería de Software.
        </p>
      </main>
    </div>
  );
}
