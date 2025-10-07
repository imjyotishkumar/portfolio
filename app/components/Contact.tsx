"use client";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-900 text-white py-6">
      <div className="max-w-7xl mx-auto text-center px-4">
        <p className="text-lg">
          Contact me:{" "}
          <a
            href="mailto:imjyotishkumar.dev@gmail.com"
            className="text-[#915EFF] hover:underline"
          >
            imjyotishkumar.dev@gmail.com
          </a>
        </p>
        <p className="mt-2 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Jyotish Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
