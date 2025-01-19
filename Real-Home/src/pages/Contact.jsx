import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const newError = {};

    if (formData.name.trim() === "") {
      newError.name = "Please input your name.";
    }

    if (!emailregex.test(formData.email)) {
      newError.email = "Please input a valid email.";
    }

    if (formData.subject.trim() === "") {
      newError.subject = "How can we assist you?";
    }

    if (formData.message.trim() === "") {
      newError.message = "Please input a message.";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    console.log("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setError({});
  };

  return (
    <section>
      <div>
        <NavBar className="fixed w-full my-0" />
      </div>
      <div className="bg-gray-100 pt-14 lg:px-16">
        {/* Hero Section */}
        <div className="">
          <div className="max-w-7xl mx-auto pt-8 px-2 md:px-3 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Get In <span className="text-orange-400">Touch</span> With Us
              </h1>
              <div className="mt-4 w-auto lg:w-auto mx-auto text-lg text-gray-500">
                <p>
                  Have questions about finding your perfect home? We're here to
                </p>
                <p>
                  help. Contact us anytime and let's create something special.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items mx-auto px-2 sm:px-6 lg:px-8 py-5 lg:py-7">
          <div className="lg:flex md:flex-col lg:flex-row-reverse lg:justify-between lg:px-16 px-3 md:px-14 py-7">
            {/* Contact Information */}
            <div className="space-y-6 py-5 lg:px-12">
              <h2 className="text-2xl font-bold text-gray-900 text-center md:text-left">
                Our Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-orange-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+234 8023 567 901</p>
                    <p className="text-gray-600">
                      Monday to Friday, 9am to 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-orange-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@realhome.com</p>
                    <p className="text-gray-600">support@realhome.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Office</h3>
                    <p className="text-gray-600">123 Business Avenue</p>
                    <p className="text-gray-600">Lagoss, Nigeria 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-orange-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6 rounded-lg bg-gray-50 lg:py-5 px-2 lg:px-12 md:pt-0">
              <h2 className="text-xl font-bold text-gray-900 mb-8">
                How Can We Assist You Today?
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full sm:w-3/4 rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring-orange-400"
                    placeholder="Akintoye"
                  />
                  {error.name && (
                    <p className="text-red-500 text-xs mt-1">{error.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full sm:w-3/4 rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring-orange-400"
                    placeholder="you@example.com"
                  />
                  {error.email && (
                    <p className="text-red-500 text-xs mt-1">{error.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700">
                    How Can We Help?
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full sm:w-3/4 rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring-orange-400"
                    placeholder="How can we assist you?"
                  />
                  {error.subject && (
                    <p className="text-red-500 text-xs mt-1">{error.subject}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full sm:w-3/4 rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring-orange-400"
                    placeholder="Tell us more about what you need..."
                  />
                  {error.message && (
                    <p className="text-red-500 text-xs mt-1">{error.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-3/4 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default ContactPage;
