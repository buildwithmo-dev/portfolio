export default function Footer() {
  return (
    <footer className="py-10 text-center border-t">
      <div className="flex justify-center gap-6 mb-4">

        <a href="https://github.com/buildwithmo-dev/">GitHub</a>
        <a href="https://www.linkedin.com/in/christophermohammedosei/">LinkedIn</a>
        <a href="mailto:chrisosei305@gmail.com">Email</a>

      </div>

      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} buildwithMo
      </p>
    </footer>
  );
}