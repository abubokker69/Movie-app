import Topbar from "./Topbar";
import Button from "./ui/Button";
import Input from "./ui/Input";
import TextArea from "./ui/TextArea";

const Contact = () => {
  return (
    <>
      <Topbar />

      <section className="bg-white ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <Input
                type="email"
                placeholder="Enter your email address"
                className="w-full"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Subject
              </label>
              <Input
                type="email"
                placeholder="Let us know how we can help you"
                className="w-full"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <TextArea cols={6} rows={4} placeholder="Leave a comment" />
            </div>
            <Button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center  rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-purple-300 "
              text="Send message"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
