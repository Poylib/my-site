export const Footer = () => {
  return (
    <footer className="w-full py-6 px-6 border-t">
      <div className="max-w-4xl mx-auto text-center text-gray-600">
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </div>
    </footer>
  );
};
