import AirBnbLogo from "../components/AirBnbLogo";
import GoogleLogo from "../components/GoogleLogo";
import MicrosoftLogo from './../components/MicrosoftLogo';
import SpotifyLogo from './../components/SpotifyLogo';
import MailchimpLogo from './../components/MailchimpLogo';
import MashableLogo from './../components/MashableLogo';
export default function CompaniesLogo() {
    const logos = [AirBnbLogo, GoogleLogo, MicrosoftLogo, SpotifyLogo, MailchimpLogo, MashableLogo];
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            {
                logos.map((Logo,i) => {
                    return (
                         <a href="#" class="flex items-center lg:justify-center">
                             <Logo key={i+i} />
                         </a>
                    )
                })
            }
        </div>
      </div>
    </section>
  );
}
