import React from 'react';
import Footer from './Footer';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import img2 from '../images/Photo/img2.jpg';
import img5 from '../images/Photo/img5.jpg';
import img6 from '../images/Photo/img6.jpg';
import img7 from '../images/Photo/img7.jpg';
import img8 from '../images/Photo/img8.jpg';
import img9 from '../images/Photo/img9.jpg';
import image from "../images/Photo/bgimage6.jpg";
import image1 from "../images/Photo/bgimage7.jpg";

function Services() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                            <br class="hidden lg:inline-block" /><span style={{ color: "darkgreen" }}>use our Services</span>
                        </h1>
                        <p class="mb-8 leading-relaxed">There is fast paced of changes taking place in the work environment due to advent of Technology. There are various organizations which are struggling to manage their business due to cumbersome bookkeeping and other statutory compliance activity. Hence Panacea is there to provide all these facility at the cheapest price to facilitate the organization to grow by focusing on the core activity of the organization.</p>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={img2} />
                    </div>
                </div>
            </section>
            <div style={{
                backgroundImage: `url(${image})`,
                height: "650px", backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}>
                <h3 style={{ color: "white", paddingLeft: "60%", paddingTop: "22%" }}>We are offering Services <span style={{ color: "yellow" }}>which is mentioned below</span></h3>
            </div>
            {/* *************01************ */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-col">
                    <h2 style={{ color: "darkblue", textAlign: "left", paddingLeft: "17%" }}>1. Bookkeeping</h2>
                    <div class="lg:w-4/6 mx-auto">
                        <div class="rounded-lg h-84 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src={img5} />
                        </div> <br />
                        <div style={{ textAlign: "left", paddingLeft: "0%" }}>
                            <p>Bookkeeping  is the recording of financial transactions, and is part of the process of accounting in business and other organizations. It involves preparing source documents for all transactions, operations, and other events of a business. Transactions include purchases, sales, receipts and payments by an individual person or an organization/corporation. There are several standard methods of bookkeeping, including the single-entry and double-entry bookkeeping systems. While these may be viewed as "real" bookkeeping, any process for recording financial transactions is a bookkeeping process.</p>
                        </div>
                    </div><br />
                    <h5>Types of Bookkeeping are</h5>
                </div>
            </section>
            <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Invoice Processing</Accordion.Header>
                        <Accordion.Body style={{ textAlign: "left" }}>
                            <p>Invoice processing is the act of receiving, examining and fulfilling payment requests from vendors and suppliers. Invoice processing within an organization ensures that a company remains in good standing with its service and resource providers while paying attention to the billing details.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Maintenance of Books of Accounts</Accordion.Header>
                        <Accordion.Body style={{ textAlign: "left" }}>
                            <p>Books of accounts including vouchers and receipts are required to be maintained under different statutory laws – Income Tax Act, Companies Act 2013 and GST Act. Books to be maintained, retention period and compulsion requirements are different under all the 3 laws</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Period End Reporting</Accordion.Header>
                        <Accordion.Body style={{ textAlign: "left" }}>
                            <p>The reporting period or the period of budgeting is the term of planning of your expenses. By default, for every user it is one month and it begins with the first day of the month. All expenses and income made by you since the beginning of the reporting period and to its end are displayed on the main screen.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>MIS Report</Accordion.Header>
                        <Accordion.Body style={{ textAlign: "left" }}>
                            <p>Generating MIS reports with 1 click has reduced our efforts, time, and resources. We were able to track every report right from received goods to financial statements anytime from anywhere. This helped us to make the right decisions at the right time and track our employee activities without any additional effort.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            {/* *************02*************** */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-col">
                    <h2 style={{ color: "darkblue", textAlign: "left", paddingLeft: "17%" }}>2. Statutory Compliance</h2>
                    <div class="lg:w-4/6 mx-auto">
                        <div class="rounded-lg h-84 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src={img6} />
                        </div> <br />
                        <div style={{ textAlign: "left", paddingLeft: "0%" }}>
                            <p>Statutory compliance is important because it prevents the risk of non-compliance and secures the company from legal issues. If the companies do not follow the law then, it can befall into legal issues such as penalties and fines. That’s the reason companies spend a lot of money and resources to confirm compliance.</p>
                        </div>
                    </div><br />
                    <h5>Types of Statutory Compliance are</h5>
                </div>
            </section>
            <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Direct Tax </Accordion.Header>
                        <Accordion.Body style={{ textAlign: "left" }}>
                            <p>A direct tax is paid directly by an individual or organization to the imposing entity. A taxpayer, for example, pays direct taxes to the government for different purposes, including real property tax, personal property tax, income tax or taxes on assets.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Indirect Tax</Accordion.Header>
                        <Accordion.Body style={{ textAlign: "left" }}>
                            <p>Indirect taxes can be defined as taxation on an individual or entity, which is ultimately paid for by another person. The body that collects the tax will then remit it to the government.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Other Statutory compliance Requirements</Accordion.Header>
                        <Accordion.Body style={{ textAlign: "left" }}>
                            <p>India has a complex web of laws applicable across various sectors. Statutory means ‘laws and regulations’ and compliance means ‘adhere to’. There are several rules and regulations in the country such as Income Tax, Service Tax, Companies Act 2013, Partnership Act and Value Added Tax (VAT) among many others. It is better to have a broad understanding of various important regulations in the country.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            {/*************03*****************/}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-col">
                    <h2 style={{ color: "darkblue", textAlign: "left", paddingLeft: "17%" }}>3. Control of Financials</h2>
                    <div class="lg:w-4/6 mx-auto">
                        <div class="rounded-lg h-84 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src={img7} />
                        </div> <br />
                        <div style={{ textAlign: "left", paddingLeft: "0%" }}>
                            <p>Finance, also known as financial economics, is the study and discipline of money, currency and capital assets. It is related with, but not synonymous with economics, the study of production, distribution, and consumption of money, assets, goods and services. Finance activities take place in financial systems at various scopes, thus the field can be roughly divided into personal, corporate, and public finance.</p>
                        </div>
                    </div><br />
                    <h5>Types of Control of Financials are</h5>
                </div>
            </section>
            <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Budget Preparation</Accordion.Header>
                        <Accordion.Body style={{ textAlign: "left" }}>
                            <p>A budget is a calculation plan, usually but not always financial, for a defined period, often one year or a month. A budget may include anticipated sales volumes and revenues, resource quantities including time, costs and expenses, environmental impacts such as greenhouse gas emissions, other impacts, assets, liabilities and cash flows. Companies, governments, families, and other organizations use budgets to express strategic plans of activities in measurable terms.</p><br/>
                            <p>A budget expresses intended expenditures along with proposals for how to meet them with resources. A budget may express a surplus, providing resources for use at a future time, or a deficit in which expenditures exceed income or other resources.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Variance Analysis</Accordion.Header>
                        <Accordion.Body style={{ textAlign: "left" }}>
                            <p>Analysis of variance (ANOVA) is a collection of statistical models and their associated estimation procedures (such as the "variation" among and between groups) used to analyze the differences among means. ANOVA was developed by the statistician Ronald Fisher. ANOVA is based on the law of total variance, where the observed variance in a particular variable is partitioned into components attributable to different sources of variation. In its simplest form, ANOVA provides a statistical test of whether two or more population means are equal, and therefore generalizes the t-test beyond two means. In other words, the ANOVA is used to test the difference between two or more means.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            {/* **************04**************** */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-col">
                    <h2 style={{ color: "darkblue", textAlign: "left", paddingLeft: "17%" }}>4. Payroll Services</h2>
                    <div class="lg:w-4/6 mx-auto">
                        <div class="rounded-lg h-84 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src={img8} />
                        </div> <br />
                        <div style={{ textAlign: "left", paddingLeft: "0%" }}>
                            <p>A payroll is the list of employees of some company that is entitled to receive payments as well as other work benefits and the amounts that each should receive.[1] Along with the amounts that each employee should receive for time worked or tasks performed, payroll can also refer to a company's records of payments that were previously made to employees, including salaries and wages, bonuses, and withheld taxes,[2] or the company's department that deals with compensation. A company may handle all aspects of the payroll process in-house or can outsource aspects to a payroll processing company.</p>
                        </div>
                    </div><br />
                    <h5>Types of Payroll Services are</h5>
                </div>
            </section>
            <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Salary Processing</Accordion.Header>
                        <Accordion.Body style={{ textAlign: "left" }}>
                            <p>A salary is a form of periodic payment from an employer to an employee, which may be specified in an employment contract. It is contrasted with piece wages, where each job, hour or other unit is paid separately, rather than on a periodic basis. From the point of view of running a business, salary can also be viewed as the cost of acquiring and retaining human resources for running operations, and is then termed personnel expense or salary expense. In accounting, salaries are recorded in payroll accounts.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Statutory compliance with respect to Employee</Accordion.Header>
                        <Accordion.Body style={{ textAlign: "left" }}>
                            <p>Statutory compliance can be understood as a pre-defined legal framework. This legal framework acts as the boundary within which the organizations must function. When the policies, protocols, or activities of an organization fail to stay within the limits of statutory compliance, they end up violating the laws and invite legal trouble.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            {/* *****************05**************** */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-col">
                    <h2 style={{ color: "darkblue", textAlign: "left", paddingLeft: "17%" }}>5. Startup Support</h2>
                    <div class="lg:w-4/6 mx-auto">
                        <div class="rounded-lg h-84 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src={img9} />
                        </div> <br />
                        <div style={{ textAlign: "left", paddingLeft: "0%" }}>
                            <p>A startup or start-up is a company or project undertaken by an entrepreneur to seek, develop, and validate a scalable business model. While entrepreneurship refers to all new businesses, including self-employment and businesses that never intend to become registered, startups refer to new businesses that intend to grow large beyond the solo founder. At the beginning, startups face high uncertainty and have high rates of failure, but a minority of them do go on to be successful and influential.</p>
                        </div>
                    </div><br />
                    <h5>Types of Startup Support are</h5>
                </div>
            </section>
            <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Registration Requirements</Accordion.Header>
                        <Accordion.Body style={{ textAlign: "left" }}>
                            <p>The Government of India, under the supervision of the Ministry of Commerce and Industry, launched the Startup India Registration. Stand-up India programme is a program to elevate and expand Indian start-ups in order to strengthen the Indian economy and stimulate entrepreneurship. Therefore, Startups should get it’s registration.</p>
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Statutory Requirements</Accordion.Header>
                        <Accordion.Body style={{ textAlign: "left" }}>
                            <p>Under the Startup India initiative, eligible companies can get recognised as Startups by DPIIT, in order to access a host of tax benefits, easier compliance, IPR fast-tracking & more. Learn more about eligibility and benefits below.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Getting various Approvals</Accordion.Header>
                        <Accordion.Body style={{ textAlign: "left" }}>
                            <p>The Startup Eligibility Criteria The company needs to meet the following eligibility criteria to avail all the benefits stated under the Startup India initiative. The company’s overall age can be five years or less or completely new. Approval by the DIPP – Department of Industrial Policy and Promotion is mandatory for the company.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div><br/><br/>
            <div style={{
                backgroundImage: `url(${image1})`,
                height: "600px", backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}>
                <h4 style={{paddingTop:"5%"}}>To Know more about our services</h4>
                <h5 style={{color:"maroon"}}>Please connect with Us</h5>
                <Button variant="light"><NavLink as={Link} to={"/contact"} className="mr-5 hover:text-white" style={{textDecoration:"none"}}>Click Me</NavLink></Button>{' '}

            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Services;