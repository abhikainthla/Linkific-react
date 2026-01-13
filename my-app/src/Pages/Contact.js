import React from 'react'

const Contact = () => {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center  text-center mb-12 ">
                  <div className="w-10 h-1 rounded-xl bg-gradient-to-r from-primary to-secondary mb-4" />

        <h1 className="text-4xl font-bold text-gray-900">
          Contact {" "} <span className="bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent font-bold">
            Us
          </span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Have a question or want to work with us? We'd love to hear from you.
          Fill out the form below and we’ll get back to you soon.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Reach out to us for project inquiries, collaborations, or general
            questions.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>
              📍 <strong>Address:</strong> New Delhi, India
            </li>
            <li>
              📧 <strong>Email:</strong> contact@mycompany.com
            </li>
            <li>
              📞 <strong>Phone:</strong> +91 98765 43210
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact