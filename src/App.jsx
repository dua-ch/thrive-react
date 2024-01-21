import "./App.css";
import Header from "./components/Header";
import Hero from "./components/hero";

function App() {
  return (
    <div className="bg-[url('/background.png')] bg-cover bg-center bg-no-repeat lg:min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4  lg:px-9">
        <Header />
        {/* hero section  */}
        <Hero />
      </div>
     
      <div className="disclaimer max-w-[1200px] mx-auto px-4  lg:px-9 disc mt-4">
      <h2 className="uppercase font-fira text-2xl  sm:text-3xl  md:text-4xl lg:text-5xl lg:leading-[4.125rem] text-[#DFDFDF] text-center">Disclaimer</h2>
      <p className="font-fira text-[#dfdfdf] font-regular mt-6">
      This offering herein is not intented for and the participation in it is prohibited for the citizens, residents, or legal entities formed under the laws of the below mentioned countries:

      Afghanistan, Albania, Bahamas, Barbados, Botswana, Cambodia, Canada, China, Cuba, Ghana, Iran (Islamic Republic of), Iraq, Jamaica, South & North Korea (the Democratic People’s Republic of), Libya, Mauritius, Myanmar, Nicaragua, Panama, Pakistan, South Sudan, Sudan (North), Syrian Arab Republic, The Crimea, Trinidad and Tobago, Uganda, United States, Vanuatu, Venezuela, Yemen, Zimbabwe. 

      The information presented in this offering is not, and is not intended to be, an offer to sell or the solicitation of an offer to buy any financial instruments, securities, or tokens in the above mentioned countries.  The tokens mentioned herein, are not securities, and have not been and will not be registered under the respective countries securities act neither the United States Securities Act of 1933, as amended (the "Securities Act"), and may not be offered or sold in the above countries absent registration or an applicable exemption from registration requirements.

      Potential investors are strongly advised to conduct their due diligence and consult with their legal, tax, and financial advisors before considering an investment in GGTORO

      GGTORO expressly disclaims any liability for any loss or damage that may arise directly or indirectly from the conduction or distribution of this document or from reliance on any information contained herein, for any person or entity that does not meet the eligibility criteria outlined above.

      There is no refund of the token sale in any case or any situation. 

      *Please note that GGTORO adheres to a strict no refund policy. By making a token purchase with us (sending money to token purchase contract), you are confirming that you have read, understood, and agreed to the following terms:
      <ol>
        <li>No Refunds: GGTORO do not offer refunds regardless of the reason.</li>
        <li>Final Sale: All token sales are final. Once a purchase is made, it cannot be returned.</li>
        <li>No Exceptions: No refund policy applies to all transactions without exception.</li>
        <li>Customer Responsibility: It is the customer's own responsibility to review all details, terms, and conditions before making a token purchase in GGTORO.</li>
      </ol>
      </p>
      </div>

      <div className="flex items-end justify-center md:justify-between md:pr-9">
        <div className="md:block hidden relative">
          {/* <img src="/Rocket.png" alt="Rocket.png" className="w-[22vw] rocket" /> */}
          <img src="/rocket-base.png" alt="rocket-base" className="w-[22vw]" />
          <div className="absolute top-[-200%] left-[20%] translate-x-[-30%] rocket">
            <img src="/rocket-new.png" alt="rocket-base" className="w-[6vw]" />
          </div>
        </div>
        <div className="flex md:block items-center justify-center pb-10 md:pb-0">
          <a href="/" className="md:mb-5 md:inline-block flex items-center justify-center">
            <img src="/join-telegram.png" alt="join-telegram" className="w-[75%] md:w-auto" />
          </a>
          <a href="/" className="flex items-center justify-center">
            <img src="/public-sale.png" alt="public-sale" className="w-[75%] md:w-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
