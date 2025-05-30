import TextView from '../components/TextView';
import Button from '../components/Button';
export default function Trial() {
    const btnProps = {
        text:"Free trial for 30 days",
        uri:"https://www.codecanit.com",
        style:"text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
    }
  return (
    <section class="bg-gray-50 dark:bg-gray-800">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div class="max-w-screen-sm mx-auto text-center">
            <TextView heading="Start your free trial today" text="Try Landwind Platform for 30 days. No credit card required."/>
            <Button {...btnProps} />
        </div>
      </div>
    </section>
  );
}
