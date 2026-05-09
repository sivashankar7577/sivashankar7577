import content from "../content.json";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <span className="text-2xl font-black tracking-tighter text-blue-600 block mb-4">
              {content.site.title.toUpperCase()}
            </span>
            <p className="text-gray-500">{content.site.description}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-500">
              <li>{content.site.contact.email}</li>
              <li>{content.site.contact.phone}</li>
              <li>{content.site.contact.address}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-500 hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="text-gray-500 hover:text-blue-600"
                >
                  Technology
                </a>
              </li>
              <li>
                <a href="#vision" className="text-gray-500 hover:text-blue-600">
                  Vision
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>{content.footer.text}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
