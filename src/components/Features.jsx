import illustration from "../assets/Illustration.png";
import illustration1 from "../assets/Illustration1.png";
import illustration2 from "../assets/Illustration2.png";
import illustration3 from "../assets/Illustration3.png";
import illustration4 from "../assets/Illustration4.png";

function Features() {
  return (
    <div className="relative mt-10">
      <div className="text-center">
        <span className="font-[Poppins] text-sm text-[14px] font-semibold uppercase">
          Features
        </span>
        <h2 className="mt-5 font-[Poppins] text-2xl font-bold tracking-wide text-[#1E293B] lg:text-4xl">
          All in One Solution for Transfer
        </h2>
      </div>
      <div className="mt-10 flex flex-col items-center justify-between lg:flex-row">
        <span className="lg:mr-30">
          <img src={illustration} alt="Illustration" />
        </span>
        <div>
          <h2 className="mt-5 font-[Poppins] text-[20px] font-bold text-[#1E293B] lg:pr-50 lg:text-3xl">
            Pay For All Conference And Consular Fee
          </h2>
          <p className="mt-2 font-[Poppins] text-[15px] tracking-wide text-[#3E4E60] lg:mr-10 lg:text-[15px]">
            We can help you to pay for all kind of foreign conference fee,
            consular fee and admission fee at moderate rate.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col-reverse items-center justify-between lg:flex-row">
        <div>
          <h2 className="mt-5 font-[Poppins] text-[20px] font-bold text-[#1E293B] lg:pr-50 lg:text-3xl">
            Purchase Of Gift Card And Prepaid Card
          </h2>
          <p className="mt-2 font-[Poppins] text-[15px] tracking-wide text-[#3E4E60] lg:mr-10 lg:text-[15px]">
            You can now pay for all kind of gift card and prepaid debit card for
            international shopping with Naira , We can also assist for social
            media advert payment.
          </p>
        </div>
        <span className="lg:mr-30">
          <img src={illustration1} alt="Illustration" />
        </span>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between lg:flex-row">
        <span className="lg:mr-30">
          <img src={illustration2} alt="Illustration" />
        </span>
        <div>
          <h2 className="mt-5 font-[Poppins] text-[20px] font-bold text-[#1E293B] lg:pr-50 lg:text-3xl">
            Purchase Of Gift Card And Prepaid Card
          </h2>
          <p className="mt-2 font-[Poppins] text-[15px] tracking-wide text-[#3E4E60] lg:mr-10 lg:text-[15px]">
            You can now pay for all kind of gift card and prepaid debit card for
            international shopping with Naira , We can also assist for social
            media advert payment.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col-reverse items-center justify-between lg:flex-row">
        <div>
          <h2 className="mt-5 font-[Poppins] text-[20px] font-bold text-[#1E293B] lg:pr-50 lg:text-3xl">
            Make Payment ToYour Vendors Or Merchant In USA, CANADA And UK
          </h2>
          <p className="mt-2 font-[Poppins] text-[15px] tracking-wide text-[#3E4E60] lg:mr-10 lg:text-[15px]">
            We can help you to make payment to your vendor and merchants in UK
            ,US , EUROPE & CAN by making payment with Naira.
          </p>
        </div>
        <span className="lg:mr-30">
          <img src={illustration3} alt="Illustration" />
        </span>
      </div>

      <div className="mt-10 flex flex-col items-center justify-between lg:flex-row">
        <span className="lg:mr-30">
          <img src={illustration4} alt="Illustration" />
        </span>
        <div>
          <h2 className="mt-5 font-[Poppins] text-[20px] font-bold text-[#1E293B] lg:pr-50 lg:text-3xl">
            We Are Always Happy To Help You
          </h2>
          <p className="mt-2 font-[Poppins] text-[15px] tracking-wide text-[#3E4E60] lg:mr-10 lg:text-[15px]">
            You can chat with us on telegram ,whatapp or slide into our DMs,
            leave an Instagram comment, send an email or call. However you
            choose to reach out.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
