import HomeAbout from "./HomeAbout";
import HomeContactUs from "./HomeContactUs";
import image1 from '../images/Upcoming/image1.png';
import image2 from '../images/Upcoming/image2.jpg';
import image3 from '../images/Upcoming/image3.jpg';
import image4 from '../images/Upcoming/image4.jpg';
import image5 from '../images/Upcoming/image5.png';
import image6 from '../images/Upcoming/image6.png';

function HomeBody() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">HOW CAN AN <span style={{ color: "green" }}>ACCOUNTANT</span>  HELP YOU?</h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Accountants also can play a critical role in consulting about a prenuptial agreement or serving as a general financial adviser before a wedding unifies two people—and their money.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">FINANCIAL SERVICES</h2>
                                <p className="leading-relaxed text-base">Financial services are the economic services provided by the finance industry, which encompasses a broad range of businesses that manage money.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">BUSINESS VALUATION</h2>
                                <p className="leading-relaxed text-base">It is a process of determining the economic value of a whole business or company unit which is used to determine the fair value of a business for a variety of reasons, including sale value & taxation.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">SMALL BUSINESS TAXES</h2>
                                <p className="leading-relaxed text-base">Owning a small business comes with several perks, but it also comes with more responsibilities. One of the biggest responsibilities you’ll face is paying business taxes. </p>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">STARTUP COMPLIANCE</h2>
                                <p className="leading-relaxed text-base">Startup Compliances is aimed to simplify legal and business-related matters and business compliance services for startups. It offers a good range of accounting services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HomeAbout />
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image1} alt="blog" />
                                <div class="p-6">
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Invoice processing</h1>
                                    <p class="leading-relaxed mb-3">Invoice processing is an accounts payable function with a series of steps for managing vendor or supplier invoices from receipt to payment.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image2} alt="blog" />
                                <div class="p-6">
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Direct & Indirect Tax</h1>
                                    <p class="leading-relaxed mb-3">while direct tax is directly paid to the government, there is generally an intermediary for collecting indirect taxes from the end-consumer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image3} alt="blog" />
                                <div class="p-6">
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Statutory Compliances</h1>
                                    <p class="leading-relaxed mb-3">There is pre-defined legal framework within which any given organisation must function.This framework is known as statutory compliance.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image4} alt="blog" />
                                <div class="p-6">
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Variance Analysis</h1>
                                    <p class="leading-relaxed mb-3">Variance Analysis is the study of deviations of actual behaviour versus forecasted or planned behaviour in budgeting or management accounting.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image5} alt="blog" />
                                <div class="p-6">
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Salary Processing</h1>
                                    <p class="leading-relaxed mb-3">Consists of the steps needed to pay employees each period. It involves tracking hours worked, calculating allowances and remitting payroll taxes.</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={image6} alt="blog" />
                                <div class="p-6">
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Startup Support</h1>
                                    <p class="leading-relaxed mb-3">A CA is a generalist and can manage all non-business services for a Startup, which can then focus on the business and operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <HomeContactUs />
        </>
    )
}
export default HomeBody;