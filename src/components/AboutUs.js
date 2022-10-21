import Footer from "./Footer";
import image from "../images/Photo/bgimage5.jpg";
import image1 from "../images/Photo/bgimage10.jpg";
import image2 from "../images/Photo/bgimage11.jpg";
import image3 from "../images/Photo/bgimage12.jpg";
import image4 from "../images/Photo/bgimage13.jpg";
function AboutUs() {
    return (
        <>
            <div style={{
                backgroundImage: `url(${image})`,
                height: "450px", backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}>
            </div>
            <br /><br />
            <h6 style={{ textAlign: "justify", paddingLeft: '5%',fontWeight: 'bold' }}>ABOUT US</h6>
            <p style={{ textAlign: "justify", padding: '5%',paddingTop:'0%',paddingBottom:'0%' }}>
                In the modern phase of professionalism, Chartered Accountants and Company Secretaries need to be updated
                with the outcome for the betterment of their business. Albeit, they are skilled enough in their field with
                an exceptional ability to solve the Accounting and Finance related objectives in a full-fledged manner.
                <br /><br />
                With the promise of best and efficient, <span style={{ color: "green", fontWeight: 'bold' }}>PANACEA</span>
                which is leading tax solution provider in the field of taxation running from nearly 2 decades has maintained
                its credibility through its products, is ready to offer CA Portal, “A complete Business Solution for CA and
                CS professionals.” keeping its objective firm, the Portal offers all the GST relevant updated rules,
                circulars, and notification uninterruptedly and assists your knowledge base.It is a comprehensible platform
                for you to exhibit affiliate services and blog posts. The portal maintains a record of a firm and
                simultaneously notify your clients about your doings, achievements and all the updates you do with the
                portal. The company also offers superb and all-round Gen GST software for its clients to file and comply
                the business with the goods and service tax regime. Another product in the portfolio is Gen Genius which is
                a complete solution for the tax management of a company. Next is Gen Payroll which is a package for the
                human resource management to maintain the employee's database and payroll functionalities in order to
                optimize the overall productivity of an organization through manpower.
                <br /><br />
                We provide the specialists’ expertise and staff support that augments customer service and improvestime
                management for business. Our services are designed to render efficient operations and efficient results in
                cost effective manner.
                <br /><br />
                We offer flexible and competitive models that will not hit the business overheads but will add value to the
                business.<br /><br />Outsourcing bookkeeping and taxation to us will reduce the burden of having to maintain
                in-house staff and software for finance management. We have state-of-the-art technologies and highly
                qualified and dynamic field experts who will cater to the unique business account needs of the business.
                Since our core business is accounting and finance, we can accomplishthe tasks of bookkeeping and accountancy
                in a shorter span and offer greater accountability through periodic reviews.<br /><br />
                We are conversant with the latest regulations for account management and taxation guidelines at
                regional and international level and our expertise and advise is available to clients at any point.
            </p>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR PILLARS</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Creating a strong company culture is not easy, but it’s worth the effort. By focusing on these four pillars.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={image1} />
                                <div className="w-full">
                                    <h3 className="text-gray-500 mb-3">DYNAMIC</h3>
                                    <p className="mb-4">Dynamic thinking helps you find solutions to thrive where others fail. Responding to changing customer demands, adapting to unexpected economic shifts, and remaining nimble are critical to dealing with setbacks and capitalizing on an opportunity.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={image2} />
                                <div className="w-full">
                                    <h3 className="text-gray-500 mb-3">TRUST</h3>
                                    <p className="mb-4">A trust is usually established by way of a trust deed - a document setting out the rules for the trust, signed by the persons putting assets into the trust (called the settlors) and the trustees.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={image3} />
                                <div className="w-full">
                                    <h3 className="text-gray-500 mb-3">PUNTUALITY</h3>
                                    <p className="mb-4">Punctuality means arriving or doing things at the appointed time, neither early nor late. Punctuality is the secret of success in life. The renowned and successful men in the world are known to be punctual. They knew the value of time and utilized it in the proper way in their life.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={image4} />
                                <div className="w-full">
                                    <h3 className="text-gray-500 mb-3">HONESTY</h3>
                                    <p className="mb-4">Honesty in the Workplace. Let's be honest about being honest - a company wide commitment to honesty at the office is hard. This requires a great deal of courage and sensitivity to discuss issues that may be uncomfortable. Responsibility for this must start at the top with the leadership team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <Footer />
        </>
    )
}
export default AboutUs;