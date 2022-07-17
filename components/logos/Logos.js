import { Image } from "@chakra-ui/react";
import ButtonRounded from "@components/buttons/rounded/ButtonRounded";

const Logos = () => {
  return (
    <section className="px-20 py-24 mx-auto bg-background">
      <h1 className="mb-3 text-3xl font-bold leading-tight text-center text-primary-400 md:text-4xl">
        Trusted by 5+ organizations, built by 1 team
      </h1>
      <p className="mb-16 text-lg text-center text-white">
        Organizations of all sizes trust Autonomous Marine Vehicle to Lorem
        Ipsum
      </p>

      <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-6">
        <div className="flex items-center justify-center py-5 px-5 bg-slate-200 rounded-lg shadow-md">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png"
            alt="Todoist Logo"
            className="block object-contain h-16"
          />
        </div>
        <div className="flex items-center justify-center py-5 px-5 bg-slate-200 rounded-lg shadow-md">
          <Image
            src="https://www.freepnglogos.com/uploads/yahoo-logo-png/yahoo-logo-png-free-download-3.png"
            alt="Slack Logo"
            className="block object-contain h-16 "
          />
        </div>
        <div className="flex items-center justify-center py-5 px-5 bg-slate-200 rounded-lg shadow-md">
          <Image
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt="Slack Logo"
            className="block object-contain h-16"
          />
        </div>
        <div className="flex items-center justify-center py-5 px-5 bg-slate-200 rounded-lg shadow-md">
          <Image
            src="https://1000logos.net/wp-content/uploads/2020/11/Gojek-Logo.png"
            alt="Slack Logo"
            className="block object-contain h-16"
          />
        </div>
        <div className="flex items-center justify-center py-5 px-5 bg-slate-200 rounded-lg shadow-md">
          <Image
            src="https://www.freepnglogos.com/uploads/logo-tokopedia-png/tokopedia-apa-itu-startup-pengertian-cara-memulai-dan-1.png"
            alt="Slack Logo"
            className="block object-contain h-16"
          />
        </div>

        <div className="flex items-center justify-center py-5 px-5 bg-slate-200 rounded-lg shadow-md">
          <Image
            src="https://1000logos.net/wp-content/uploads/2021/05/GeForce-logo.png"
            alt="Typeform Logo"
            className="block object-contain h-16"
          />
        </div>
      </div>

      <div className="text-center">
        <ButtonRounded>Join Us!</ButtonRounded>
      </div>
    </section>
  );
};

export default Logos;
